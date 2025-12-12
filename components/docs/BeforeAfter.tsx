'use client';

import { ReactNode } from 'react';
import { X, Check, Clock, ArrowRight } from 'lucide-react';

interface BeforeAfterStep {
  step: string;
  detail?: string;
}

interface BeforeAfterProps {
  title: string;
  description?: string;
  before: {
    steps: BeforeAfterStep[];
    time?: string;
    painPoints?: string[];
  };
  after: {
    steps: BeforeAfterStep[];
    time?: string;
    benefits?: string[];
  };
  timeSaved?: string;
}

export function BeforeAfter({
  title,
  description,
  before,
  after,
  timeSaved,
}: BeforeAfterProps) {
  return (
    <div className="not-prose my-8">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Before Column */}
        <div className="rounded-xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-950/30">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <X className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-red-900 dark:text-red-100">
                Classic Bonzai
              </h4>
              {before.time && (
                <div className="flex items-center gap-1 text-sm text-red-700 dark:text-red-300">
                  <Clock className="h-3 w-3" /> {before.time}
                </div>
              )}
            </div>
          </div>

          <ol className="space-y-2">
            {before.steps.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-lg bg-white/60 p-2 dark:bg-black/20"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-200">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {step.step}
                  </p>
                  {step.detail && (
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                      {step.detail}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {before.painPoints && before.painPoints.length > 0 && (
            <div className="mt-4 border-t border-red-200 pt-4 dark:border-red-800">
              <h5 className="mb-2 text-sm font-semibold text-red-800 dark:text-red-200">
                Pain Points
              </h5>
              <ul className="space-y-1">
                {before.painPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300"
                  >
                    <X className="mt-0.5 h-3 w-3 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* After Column */}
        <div className="rounded-xl border-2 border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-950/30">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
              <Check className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">
                Bonzai 2
              </h4>
              {after.time && (
                <div className="flex items-center gap-1 text-sm text-green-700 dark:text-green-300">
                  <Clock className="h-3 w-3" /> {after.time}
                </div>
              )}
            </div>
          </div>

          <ol className="space-y-2">
            {after.steps.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-lg bg-white/60 p-2 dark:bg-black/20"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {step.step}
                  </p>
                  {step.detail && (
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                      {step.detail}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {after.benefits && after.benefits.length > 0 && (
            <div className="mt-4 border-t border-green-200 pt-4 dark:border-green-800">
              <h5 className="mb-2 text-sm font-semibold text-green-800 dark:text-green-200">
                Benefits
              </h5>
              <ul className="space-y-1">
                {after.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300"
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {timeSaved && (
        <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-bonzai-100 p-3 dark:bg-bonzai-900/30">
          <Clock className="h-5 w-5 text-bonzai-600 dark:text-bonzai-400" />
          <span className="font-semibold text-bonzai-800 dark:text-bonzai-200">
            Time Saved: {timeSaved}
          </span>
        </div>
      )}
    </div>
  );
}

interface FeatureComparisonProps {
  feature: string;
  classic: string;
  modern: string;
  action?: string;
}

export function FeatureComparisonRow({ feature, classic, modern, action }: FeatureComparisonProps) {
  return (
    <div className="not-prose flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="w-1/4">
        <span className="font-semibold text-gray-900 dark:text-white">{feature}</span>
      </div>
      <div className="w-1/4 text-gray-500 dark:text-gray-400">{classic}</div>
      <ArrowRight className="h-5 w-5 shrink-0 text-bonzai-500" />
      <div className="w-1/4 font-medium text-bonzai-700 dark:text-bonzai-400">{modern}</div>
      {action && (
        <div className="w-1/4 rounded bg-amber-100 px-2 py-1 text-sm text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
          {action}
        </div>
      )}
    </div>
  );
}

interface FeatureComparisonTableProps {
  title?: string;
  features: FeatureComparisonProps[];
}

export function FeatureComparisonTable({ title, features }: FeatureComparisonTableProps) {
  return (
    <div className="not-prose my-8">
      {title && (
        <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      )}
      <div className="space-y-2">
        <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-3 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <div className="w-1/4">Feature</div>
          <div className="w-1/4">Classic Bonzai</div>
          <div className="w-5 shrink-0" />
          <div className="w-1/4">Bonzai 2</div>
          <div className="w-1/4">Your Action</div>
        </div>
        {features.map((feature, index) => (
          <FeatureComparisonRow key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

