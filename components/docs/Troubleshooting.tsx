'use client';

import { ReactNode, useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle, ExternalLink } from 'lucide-react';

interface TroubleshootItem {
  problem: string;
  solution: string;
  details?: string;
}

interface TroubleshootingProps {
  items: TroubleshootItem[];
}

export function Troubleshooting({ items }: TroubleshootingProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="not-prose my-8">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
        <HelpCircle className="h-5 w-5 text-amber-500" />
        Troubleshooting
      </h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-4 text-left"
            >
              <span className="font-medium text-gray-900 dark:text-white">
                {item.problem}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <div>
                    <p className="font-medium text-green-700 dark:text-green-300">
                      Solution:
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {item.solution}
                    </p>
                    {item.details && (
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Support Link */}
      <div className="mt-4 rounded-lg border border-bonzai-200 bg-bonzai-50 p-4 dark:border-bonzai-800 dark:bg-bonzai-950">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Still need help?</strong>{' '}
          <a
            href="https://support.bonzai.aurea.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-bonzai-600 hover:text-bonzai-700 dark:text-bonzai-400 dark:hover:text-bonzai-300"
          >
            Contact Bonzai Support
            <ExternalLink className="h-3 w-3" />
          </a>
        </p>
      </div>
    </div>
  );
}




