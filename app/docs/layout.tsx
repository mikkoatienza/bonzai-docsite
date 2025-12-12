import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { pageTree } from '@/lib/source';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        title: (
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-bonzai-700 text-white">
              <span className="font-heading text-sm font-bold">B</span>
            </div>
            <span className="font-heading font-bold">Bonzai 2</span>
          </Link>
        ),
      }}
      sidebar={{
        defaultOpenLevel: 1,
      }}
    >
      {children}
    </DocsLayout>
  );
}

