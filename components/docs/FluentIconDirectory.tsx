'use client';

import { useEffect, useMemo, useState } from 'react';
import { Copy, Check, Search } from 'lucide-react';
import clsx from 'clsx';

import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { getIconClassName } from '@fluentui/style-utilities';

interface FluentIconDirectoryProps {
  iconNames: string[];
  defaultQuery?: string;
}

export function FluentIconDirectory({ iconNames, defaultQuery = '' }: FluentIconDirectoryProps) {
  const [query, setQuery] = useState(defaultQuery);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  useEffect(() => {
    // Registers FabricMDL2 icon subsets and injects the font-face rules.
    // (Safe to call more than once; we suppress duplicate warnings.)
    initializeIcons(undefined, { disableWarnings: true });
  }, []);

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

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((name) => {
          const isCopied = copiedName === name;
          const iconClass = getIconClassName(name);

          return (
            <button
              key={name}
              type="button"
              onClick={() => copy(name)}
              className="group flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 text-left shadow-sm transition hover:border-bonzai-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-bonzai-700"
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

              <span className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-gray-500 group-hover:bg-gray-50 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-900 dark:group-hover:text-gray-100">
                {isCopied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                {isCopied ? 'Copied' : 'Copy'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

