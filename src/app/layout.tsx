import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import { cn } from '@/lib/utils';
import { GeneralLayout } from '@/components/core/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '8BIT',
  description: '8BIT',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GeneralLayout>
            <Suspense fallback={null}>{children}</Suspense>
          </GeneralLayout>
        </Providers>
      </body>
    </html>
  );
}
