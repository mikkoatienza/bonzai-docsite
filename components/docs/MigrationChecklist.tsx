'use client';

import { useState, ReactNode } from 'react';
import { Check, Square, ChevronDown, ChevronRight, AlertCircle, Clock } from 'lucide-react';

interface ChecklistItem {
  id: string;
  task: string;
  description?: string;
  critical?: boolean;
  estimatedTime?: string;
}

interface ChecklistSectionProps {
  title: string;
  icon?: ReactNode;
  items: ChecklistItem[];
  phase?: 'pre' | 'during' | 'post';
  defaultExpanded?: boolean;
}

export function MigrationChecklistSection({
  title,
  icon,
  items,
  phase = 'during',
  defaultExpanded = true,
}: ChecklistSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const completedCount = items.filter((item) => checkedItems.has(item.id)).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  const phaseColors = {
    pre: 'border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/30',
    during: 'border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-950/30',
    post: 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/30',
  };

  const phaseBadgeColors = {
    pre: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300',
    during: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    post: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
  };

  const phaseLabels = {
    pre: 'Pre-Migration',
    during: 'Migration',
    post: 'Post-Migration',
  };

  return (
    <div className={`not-prose my-6 rounded-xl border-2 ${phaseColors[phase]}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${phaseBadgeColors[phase]}`}>
                {phaseLabels[phase]}
              </span>
            </div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {completedCount} of {items.length} tasks completed
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Progress bar */}
          <div className="hidden w-32 sm:block">
            <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-bonzai-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">
              {progressPercent}%
            </div>
          </div>
          {expanded ? (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronRight className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors ${
                    checkedItems.has(item.id)
                      ? 'bg-green-50 dark:bg-green-950/30'
                      : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="mt-0.5">
                    {checkedItems.has(item.id) ? (
                      <div className="flex h-5 w-5 items-center justify-center rounded bg-green-500 text-white">
                        <Check className="h-3 w-3" />
                      </div>
                    ) : (
                      <Square className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-medium ${
                          checkedItems.has(item.id)
                            ? 'text-gray-500 line-through dark:text-gray-400'
                            : 'text-gray-900 dark:text-white'
                        }`}
                      >
                        {item.task}
                      </span>
                      {item.critical && (
                        <span className="flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/50 dark:text-red-300">
                          <AlertCircle className="h-3 w-3" /> Required
                        </span>
                      )}
                      {item.estimatedTime && (
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="h-3 w-3" /> {item.estimatedTime}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

interface MigrationChecklistProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export function MigrationChecklist({
  title = 'Migration Checklist',
  description,
  children,
}: MigrationChecklistProps) {
  return (
    <div className="not-prose my-8">
      {title && (
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      )}
      {description && (
        <p className="mb-6 text-gray-600 dark:text-gray-400">{description}</p>
      )}
      {children}
    </div>
  );
}



