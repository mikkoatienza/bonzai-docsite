'use client';

import { useEffect, useMemo, useState } from 'react';
import { Copy, Check, Search, Download } from 'lucide-react';
import clsx from 'clsx';

import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { getIcon, getIconClassName } from '@fluentui/style-utilities';

interface FluentIconDirectoryProps {
  iconNames: string[];
  defaultQuery?: string;
}

export function FluentIconDirectory({ iconNames, defaultQuery = '' }: FluentIconDirectoryProps) {
  const [query, setQuery] = useState(defaultQuery);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [iconsReady, setIconsReady] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [downloadSize, setDownloadSize] = useState<number>(512);
  const [downloadColor, setDownloadColor] = useState<'black' | 'white'>('black');

  useEffect(() => {
    // Registers FabricMDL2 icon subsets and injects the font-face rules.
    // (Safe to call more than once; we suppress duplicate warnings.)
    initializeIcons(undefined, { disableWarnings: true });
    // Trigger a re-render so previews compute after registration.
    setIconsReady(true);
    // Don't block downloads on font preload detection. If previews are visible,
    // the font is effectively available even if the Font Loading API is unsupported.
    setFontLoaded(true);

    // Preload the MDL2 icon font so canvas exports render correctly on first click.
    // (If the font isn't loaded yet, canvas may render tofu/missing-glyph boxes.)
    void (async () => {
      try {
        const sample = getIcon('PageLink');
        const glyph = sample && typeof sample.code === 'string' ? sample.code : '';
        const family =
          sample && sample.subset && sample.subset.fontFace ? sample.subset.fontFace.fontFamily : undefined;
        if (!glyph || !family) return;

        const normalizedFamily = family.replace(/^['"]+|['"]+$/g, '').trim();
        const fonts: any = (document as any).fonts;
        if (fonts && typeof fonts.load === 'function') {
          await fonts.load(`16px \"${normalizedFamily}\"`, glyph);
          if (fonts.ready) {
            await fonts.ready;
          }
        }
      } catch {
        // Ignore preload failures; downloads remain available.
      }
    })();
  }, []);

  const _downloadIconPng = async (iconName: string) => {
    if (!iconsReady) return;

    const record = getIcon(iconName);
    if (!record || !record.code || typeof record.code !== 'string') return;

    const glyph = record.code;
    const fontFamilyRaw = record.subset && record.subset.fontFace ? record.subset.fontFace.fontFamily : undefined;
    const fontFamily = fontFamilyRaw ? fontFamilyRaw.replace(/^['"]+|['"]+$/g, '').trim() : undefined;
    if (!fontFamily) return;

    const canvas = document.createElement('canvas');
    canvas.width = downloadSize;
    canvas.height = downloadSize;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // IMPORTANT:
    // Keep the download flow synchronous to avoid browsers blocking downloads
    // after an awaited promise breaks the user-gesture call stack.
    try {
      const padding = Math.round(downloadSize * 0.1);
      const maxDim = downloadSize - padding * 2;

      let fontPx = Math.round(downloadSize * 0.9);
      let fontSpec = `${fontPx}px "${fontFamily}"`;

      // Measure once and scale down if needed so the glyph fills the canvas nicely.
      ctx.font = fontSpec;
      let metrics = ctx.measureText(glyph);
      const ascent = (metrics as any).actualBoundingBoxAscent || 0;
      const descent = (metrics as any).actualBoundingBoxDescent || 0;
      const height = ascent + descent;
      const width = metrics.width || 0;

      if (width > 0 && height > 0) {
        const scale = Math.min(maxDim / width, maxDim / height, 1);
        if (scale < 1) {
          fontPx = Math.max(1, Math.floor(fontPx * scale));
          fontSpec = `${fontPx}px "${fontFamily}"`;
          ctx.font = fontSpec;
          metrics = ctx.measureText(glyph);
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = downloadColor === 'white' ? '#ffffff' : '#000000';
      ctx.font = fontSpec;
      // Center vertically using ascent/descent when available.
      const ascent2 = (metrics as any).actualBoundingBoxAscent || 0;
      const descent2 = (metrics as any).actualBoundingBoxDescent || 0;
      const y = descent2 || ascent2 ? (canvas.height + (ascent2 - descent2)) / 2 : canvas.height / 2;
      ctx.fillText(glyph, canvas.width / 2, y);

      const url = canvas.toDataURL('image/png');
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `${iconName}-${downloadSize}px.png`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
    } catch {
      // If canvas/font load fails, do nothing (user can still copy the icon name).
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return iconNames;
    return iconNames.filter((n) => n.toLowerCase().indexOf(q) !== -1);
  }, [iconNames, query]);

  const copy = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedName(name);
      window.setTimeout(() => {
        setCopiedName((current) => (current === name ? null : current));
      }, 1500);
    } catch {
      // Ignore clipboard errors (e.g., non-secure context). Users can still select text manually.
      setCopiedName(name);
      window.setTimeout(() => {
        setCopiedName((current) => (current === name ? null : current));
      }, 1500);
    }
  };

  return (
    <div className="not-prose">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <strong className="text-gray-900 dark:text-white">{filtered.length}</strong> icons
          {query.trim() ? (
            <>
              {' '}
              matching <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">{query.trim()}</code>
            </>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-300">PNG size</label>
            <select
              value={downloadSize}
              onChange={(e) => setDownloadSize(Number(e.target.value))}
              className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-900 shadow-sm outline-none focus:border-bonzai-400 focus:ring-2 focus:ring-bonzai-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-bonzai-500 dark:focus:ring-bonzai-900/40"
            >
              <option value={64}>64px</option>
              <option value={128}>128px</option>
              <option value={256}>256px</option>
              <option value={512}>512px</option>
              <option value={1024}>1024px</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-300">PNG color</label>
            <select
              value={downloadColor}
              onChange={(e) => setDownloadColor(e.target.value as 'black' | 'white')}
              className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-900 shadow-sm outline-none focus:border-bonzai-400 focus:ring-2 focus:ring-bonzai-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-bonzai-500 dark:focus:ring-bonzai-900/40"
            >
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>

          <div className="relative w-full sm:w-96">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search icon names (e.g., Document, News, MapPin)..."
              className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 shadow-sm outline-none focus:border-bonzai-400 focus:ring-2 focus:ring-bonzai-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-bonzai-500 dark:focus:ring-bonzai-900/40"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((name) => {
          const isCopied = copiedName === name;
          const iconClass = iconsReady ? getIconClassName(name) : '';

          return (
            <div
              key={name}
              className="group w-full rounded-xl border border-gray-200 bg-white p-3 text-left shadow-sm transition hover:border-bonzai-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-bonzai-700"
            >
              <button
                type="button"
                onClick={() => copy(name)}
                className="flex w-full items-center gap-3 text-left"
                title={`Click to copy: ${name}`}
              >
                <span
                  className={clsx(
                    'flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100',
                    iconClass
                  )}
                  aria-hidden="true"
                  style={{ fontSize: 18 }}
                />

                <span className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-gray-900 dark:text-white">{name}</div>
                  <div className="truncate text-xs text-gray-500 dark:text-gray-400">Click to copy</div>
                </span>

                {isCopied ? (
                  <span className="inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    <Check className="h-3.5 w-3.5" />
                    Copied
                  </span>
                ) : null}
              </button>

              <div className="mt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    void _downloadIconPng(name);
                  }}
                  className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100"
                  title={`Download ${name} as PNG`}
                  disabled={!iconsReady}
                >
                  <Download className="h-3.5 w-3.5" />
                  PNG
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

