'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Copy, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

interface PropertyConfig {
  property: string;
  value: string;
}

interface RecipeCardProps {
  title: string;
  description: string;
  useCase: string;
  config: PropertyConfig[];
  icon?: ReactNode;
}

export function RecipeCard({ title, description, useCase, config, icon }: RecipeCardProps) {
  const [copied, setCopied] = useState(false);

  const copyConfig = () => {
    const configText = config.map(c => `${c.property}: ${c.value}`).join('\n');
    navigator.clipboard.writeText(configText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="not-prose rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b border-gray-200 p-4 dark:border-gray-700">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900/50 dark:text-bonzai-300">
                {icon}
              </div>
            )}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Best for: {useCase}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Configuration
          </span>
          <button
            onClick={copyConfig}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
        </div>
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
          <table className="w-full text-sm">
            <tbody>
              {config.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-0 dark:border-gray-700">
                  <td className="py-1.5 pr-4 font-medium text-gray-700 dark:text-gray-300">
                    {item.property}
                  </td>
                  <td className="py-1.5 text-gray-600 dark:text-gray-400">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

interface RecipeGridProps {
  children: ReactNode;
}

export function RecipeGrid({ children }: RecipeGridProps) {
  return (
    <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
      {children}
    </div>
  );
}

interface PageRecipeCardProps {
  title: string;
  description: string;
  webPartCount: number;
  href: string;
  tags?: string[];
}

export function PageRecipeCard({ title, description, webPartCount, href, tags }: PageRecipeCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-bonzai-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-bonzai-600"
    >
      <h4 className="font-semibold text-gray-900 group-hover:text-bonzai-600 dark:text-white dark:group-hover:text-bonzai-400">
        {title}
      </h4>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-500">
          {webPartCount} web parts
        </span>
        <div className="flex gap-1">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1 text-sm font-medium text-bonzai-600 dark:text-bonzai-400">
        View recipe
        <ExternalLink className="h-4 w-4" />
      </div>
    </Link>
  );
}

