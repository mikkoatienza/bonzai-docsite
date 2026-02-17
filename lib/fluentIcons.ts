import fs from 'fs';
import path from 'path';

type FabricIconConfig = {
  glyphs?: Array<{ name: string; unicode?: string }>;
};

function _readMdl2Configs(): FabricIconConfig[] {
  // @fluentui/font-icons-mdl2 does not export its config JSON files via package "exports".
  // We read them from disk via the node_modules symlink (server-side only).
  // Note: avoid require.resolve here because the Next.js server bundle may rewrite it.
  const configDir = path.join(process.cwd(), 'node_modules', '@fluentui', 'font-icons-mdl2', 'config');
  if (!fs.existsSync(configDir)) {
    throw new Error('[fluentIcons] Could not locate @fluentui/font-icons-mdl2/config directory.');
  }

  const entries = fs.readdirSync(configDir);
  const files = entries
    .filter((f) => /^fabric-icons-(\d+)\.json$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return files.map((file) => {
    const fullPath = path.join(configDir, file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(raw) as FabricIconConfig;
  });
}

/**
 * Returns the MDL2 icon names used by Fluent UI's Icon system (FabricMDL2).
 * These names match what the SPFx Icon Picker expects (e.g., "DocumentSearch", "News", "MapPin").
 */
export function getFluentMdl2IconNames(): string[] {
  const configs = _readMdl2Configs();
  const names: string[] = [];
  for (const cfg of configs) {
    const glyphs = cfg && Array.isArray(cfg.glyphs) ? cfg.glyphs : [];
    for (const g of glyphs) {
      if (g && typeof g.name === 'string' && g.name.trim()) {
        names.push(g.name.trim());
      }
    }
  }
  return Array.from(new Set(names)).sort((a, b) => a.localeCompare(b));
}

