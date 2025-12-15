'use client';

import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface Step {
  title: string;
  description: ReactNode;
  tip?: string;
}

interface StepGuideProps {
  title?: string;
  steps: Step[];
}

export function StepGuide({ title = 'Step-by-Step Configuration', steps }: StepGuideProps) {
  return (
    <div className="not-prose my-8">
      {title && (
        <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bonzai-100 text-lg font-bold text-bonzai-700 dark:bg-bonzai-900/50 dark:text-bonzai-300">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h4>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </div>
                {step.tip && (
                  <div className="mt-3 flex items-start gap-2 rounded-md bg-emerald-50 px-3 py-2 dark:bg-emerald-950/30">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                      {step.tip}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SingleStepProps {
  number: number;
  title: string;
  children: ReactNode;
  tip?: string;
}

export function Step({ number, title, children, tip }: SingleStepProps) {
  return (
    <div className="not-prose my-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bonzai-100 text-lg font-bold text-bonzai-700 dark:bg-bonzai-900/50 dark:text-bonzai-300">
          {number}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {children}
          </div>
          {tip && (
            <div className="mt-3 flex items-start gap-2 rounded-md bg-emerald-50 px-3 py-2 dark:bg-emerald-950/30">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <p className="text-sm text-emerald-700 dark:text-emerald-300">{tip}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




