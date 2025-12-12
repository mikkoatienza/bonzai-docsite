import { Hero, Features, ComparisonTable, Footer, LearningPaths, PopularLinks } from '@/components/landing';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bonzai-700 text-white">
              <span className="font-heading text-lg font-bold">B</span>
            </div>
            <span className="font-heading text-xl font-bold text-gray-900 dark:text-white">
              Bonzai 2
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/docs"
              className="text-sm font-medium text-gray-600 hover:text-bonzai-600 dark:text-gray-300 dark:hover:text-bonzai-400"
            >
              Documentation
            </Link>
            <Link
              href="/docs/web-parts"
              className="text-sm font-medium text-gray-600 hover:text-bonzai-600 dark:text-gray-300 dark:hover:text-bonzai-400"
            >
              Web Parts
            </Link>
            <Link
              href="/docs/getting-started/installation"
              className="rounded-lg bg-bonzai-700 px-4 py-2 text-sm font-medium text-white hover:bg-bonzai-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Learning Paths - Start Here */}
      <LearningPaths />

      {/* Popular Links */}
      <PopularLinks />

      {/* Features Section */}
      <Features />

      {/* Comparison Section */}
      <ComparisonTable />

      {/* CTA Section */}
      <section className="bg-bonzai-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to transform your intranet?
          </h2>
          <p className="mt-4 text-lg text-bonzai-100">
            Get started with Bonzai 2 today. No AWS infrastructure required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-bonzai-700 shadow-lg transition-all hover:bg-bonzai-50"
            >
              Installation Guide
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

