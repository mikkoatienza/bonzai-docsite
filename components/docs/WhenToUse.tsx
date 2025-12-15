'use client';

import { ReactNode } from 'react';
import { CheckCircle, XCircle, MapPin } from 'lucide-react';

interface WhenToUseProps {
  useCases: string[];
  bestFor: string[];
  notFor?: string[];
  alternatives?: { name: string; when: string }[];
}

export function WhenToUse({ useCases, bestFor, notFor, alternatives }: WhenToUseProps) {
  return (
    <div className="not-prose my-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
        When to Use This Web Part
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Use Cases */}
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Use this when you need to...
          </h4>
          <ul className="space-y-2">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                {useCase}
              </li>
            ))}
          </ul>
        </div>

        {/* Best Locations */}
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
            <MapPin className="h-5 w-5 text-blue-500" />
            Best page locations
          </h4>
          <ul className="space-y-2">
            {bestFor.map((location, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Not For */}
      {notFor && notFor.length > 0 && (
        <div className="mt-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
          <h4 className="mb-2 flex items-center gap-2 font-semibold text-amber-900 dark:text-amber-100">
            <XCircle className="h-5 w-5 text-amber-500" />
            Consider alternatives when...
          </h4>
          <ul className="space-y-1">
            {notFor.map((item, index) => (
              <li key={index} className="text-sm text-amber-800 dark:text-amber-200">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Alternatives */}
      {alternatives && alternatives.length > 0 && (
        <div className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Related web parts:
          </h4>
          <div className="flex flex-wrap gap-2">
            {alternatives.map((alt, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                <strong>{alt.name}</strong> — {alt.when}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}



