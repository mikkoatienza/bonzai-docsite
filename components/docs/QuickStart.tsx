'use client';

import { ReactNode } from 'react';
import { Clock, CheckCircle } from 'lucide-react';

interface QuickStartStep {
  title: string;
  description: string;
}

interface QuickStartProps {
  title?: string;
  time?: string;
  steps: QuickStartStep[];
  prerequisites?: string[];
}

export function QuickStart({ 
  title = 'Quick Start', 
  time = '2 minutes',
  steps,
  prerequisites 
}: QuickStartProps) {
  return (
    <div className="not-prose my-8 rounded-xl border-2 border-bonzai-200 bg-gradient-to-br from-bonzai-50 to-white p-6 dark:border-bonzai-800 dark:from-bonzai-950/50 dark:to-gray-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="flex items-center gap-1.5 rounded-full bg-bonzai-100 px-3 py-1 text-sm font-medium text-bonzai-700 dark:bg-bonzai-900/50 dark:text-bonzai-300">
          <Clock className="h-4 w-4" />
          {time}
        </div>
      </div>

      {prerequisites && prerequisites.length > 0 && (
        <div className="mb-4 rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Prerequisites
          </p>
          <ul className="space-y-1">
            {prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {prereq}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bonzai-600 text-sm font-bold text-white">
              {index + 1}
            </div>
            <div className="flex-1 pt-1">
              <p className="font-semibold text-gray-900 dark:text-white">
                {step.title}
              </p>
              <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

