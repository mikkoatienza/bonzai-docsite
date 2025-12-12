import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { SearchProvider } from '@/components/search/SearchProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Bonzai 2 - Modern SharePoint Intranet',
    template: '%s | Bonzai 2',
  },
  description:
    'Bonzai 2 is a modern SharePoint Framework (SPFx) solution that provides 21+ web parts for building beautiful intranet experiences on SharePoint Online.',
  keywords: [
    'SharePoint',
    'SPFx',
    'Intranet',
    'Web Parts',
    'Microsoft 365',
    'Office 365',
    'Bonzai',
  ],
  authors: [{ name: 'Bonzai Development Team' }],
  openGraph: {
    title: 'Bonzai 2 - Modern SharePoint Intranet',
    description:
      'Build beautiful, modern intranets with 21+ SPFx web parts. No AWS infrastructure required.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <RootProvider
          search={{
            SearchDialog: SearchProvider,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

