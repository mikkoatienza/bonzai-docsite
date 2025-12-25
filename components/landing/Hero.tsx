'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield, Download, Headphones } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-10" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f766e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-bonzai-500/10 px-4 py-2 text-sm font-medium text-bonzai-700 dark:bg-bonzai-400/10 dark:text-bonzai-400">
            <Sparkles className="h-4 w-4" />
            <span>Now with 21+ Web Parts</span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Bonzai 2</span> for Modern SharePoint
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            A SharePoint Framework (SPFx) solution providing 21+ web parts for 
            SharePoint Online intranets. Built with React and Fluent UI.
            <span className="font-semibold text-bonzai-700 dark:text-bonzai-400">
              {' '}No external infrastructure required.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs/getting-started/download"
              className="inline-flex items-center gap-2 rounded-lg bg-bonzai-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-bonzai-700/25 transition-all hover:bg-bonzai-600 hover:shadow-xl hover:shadow-bonzai-700/30"
            >
              <Download className="h-4 w-4" />
              Download Bonzai 2
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:border-bonzai-300 hover:bg-bonzai-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-bonzai-700 dark:hover:bg-bonzai-950"
            >
              Read Documentation
            </Link>
          </div>

          {/* Support Link */}
          <div className="mt-6">
            <a
              href="https://support.bonzai.aurea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-bonzai-600 dark:text-gray-400 dark:hover:text-bonzai-400"
            >
              <Headphones className="h-4 w-4" />
              Need help? Contact Support
            </a>
          </div>

          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-3 rounded-xl bg-white/50 p-4 backdrop-blur dark:bg-gray-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                <Zap className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Instant Theming</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Real-time CSS variables</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-xl bg-white/50 p-4 backdrop-blur dark:bg-gray-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                <Shield className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">No AWS Needed</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Runs 100% in SharePoint</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-xl bg-white/50 p-4 backdrop-blur dark:bg-gray-900/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">21+ Web Parts</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">React + Fluent UI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

