'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, FileText, ArrowRight, X, Command } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  url: string;
  content: string;
  category: string;
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchProvider({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [open]);

  // Search function
  const search = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setResults(data);
      setSelectedIndex(0);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      search(query);
    }, 200);

    return () => clearTimeout(timer);
  }, [query, search]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        router.push(results[selectedIndex].url);
        onOpenChange(false);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onOpenChange(false);
      }
    },
    [results, selectedIndex, router, onOpenChange]
  );

  // Navigate to result
  const handleResultClick = (url: string) => {
    router.push(url);
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* Dialog */}
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900">
        {/* Search Input */}
        <div className="flex items-center border-b border-gray-200 px-4 dark:border-gray-700">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent px-4 py-4 text-base text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="ml-2 hidden rounded bg-gray-100 px-2 py-1 text-xs text-gray-500 sm:inline dark:bg-gray-800 dark:text-gray-400">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {isLoading && (
            <div className="flex items-center justify-center py-8 text-gray-500">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-bonzai-500 border-t-transparent" />
              <span className="ml-3">Searching...</span>
            </div>
          )}

          {!isLoading && query.length >= 2 && results.length === 0 && (
            <div className="py-12 text-center text-gray-500 dark:text-gray-400">
              <Search className="mx-auto mb-3 h-10 w-10 opacity-50" />
              <p className="text-sm font-medium">No results found</p>
              <p className="mt-1 text-xs">Try searching for something else</p>
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <ul className="py-2">
              {results.map((result, index) => (
                <li key={result.id}>
                  <button
                    onClick={() => handleResultClick(result.url)}
                    className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors ${
                      index === selectedIndex
                        ? 'bg-bonzai-50 dark:bg-bonzai-950/30'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        index === selectedIndex
                          ? 'bg-bonzai-500 text-white'
                          : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                      }`}
                    >
                      <FileText className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-medium ${
                            index === selectedIndex
                              ? 'text-bonzai-700 dark:text-bonzai-400'
                              : 'text-gray-900 dark:text-white'
                          }`}
                        >
                          {result.title}
                        </span>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                          {result.category}
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-sm text-gray-500 dark:text-gray-400">
                        {result.content}
                      </p>
                    </div>
                    <ArrowRight
                      className={`mt-2 h-4 w-4 shrink-0 ${
                        index === selectedIndex ? 'text-bonzai-500' : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {!isLoading && query.length < 2 && (
            <div className="py-8 text-center text-gray-500 dark:text-gray-400">
              <Command className="mx-auto mb-3 h-10 w-10 opacity-50" />
              <p className="text-sm font-medium">Search Bonzai 2 Docs</p>
              <p className="mt-1 text-xs">Type at least 2 characters to search</p>
              <div className="mt-4 flex items-center justify-center gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <kbd className="rounded bg-gray-100 px-1.5 py-0.5 dark:bg-gray-800">↑↓</kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded bg-gray-100 px-1.5 py-0.5 dark:bg-gray-800">↵</kbd>
                  select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded bg-gray-100 px-1.5 py-0.5 dark:bg-gray-800">esc</kbd>
                  close
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




