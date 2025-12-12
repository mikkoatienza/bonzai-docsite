'use client';

import { ReactNode } from 'react';
import { Info, AlertTriangle, Lightbulb, Zap, CheckCircle } from 'lucide-react';

type CalloutType = 'tip' | 'warning' | 'info' | 'pro' | 'success';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutStyles: Record<CalloutType, {
  bg: string;
  border: string;
  icon: typeof Info;
  iconColor: string;
  titleColor: string;
}> = {
  tip: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800',
    icon: Lightbulb,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    titleColor: 'text-emerald-900 dark:text-emerald-100',
  },
  warning: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-800',
    icon: AlertTriangle,
    iconColor: 'text-amber-600 dark:text-amber-400',
    titleColor: 'text-amber-900 dark:text-amber-100',
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800',
    icon: Info,
    iconColor: 'text-blue-600 dark:text-blue-400',
    titleColor: 'text-blue-900 dark:text-blue-100',
  },
  pro: {
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    border: 'border-purple-200 dark:border-purple-800',
    icon: Zap,
    iconColor: 'text-purple-600 dark:text-purple-400',
    titleColor: 'text-purple-900 dark:text-purple-100',
  },
  success: {
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-200 dark:border-green-800',
    icon: CheckCircle,
    iconColor: 'text-green-600 dark:text-green-400',
    titleColor: 'text-green-900 dark:text-green-100',
  },
};

const defaultTitles: Record<CalloutType, string> = {
  tip: 'Tip',
  warning: 'Warning',
  info: 'Note',
  pro: 'Pro Tip',
  success: 'Success',
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = calloutStyles[type];
  const Icon = style.icon;
  const displayTitle = title || defaultTitles[type];

  return (
    <div className={`my-6 rounded-lg border ${style.border} ${style.bg} p-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${style.iconColor}`} />
        <div className="min-w-0 flex-1">
          <p className={`font-semibold ${style.titleColor}`}>{displayTitle}</p>
          <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

