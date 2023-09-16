import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/components/parts/Providers';

import '@/assets/styles/globals.css';
import LayoutClient from '@/components/parts/LayoutClient';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phone Book',
  description: 'Phone Book',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>

        <LayoutClient />
      </body>
    </html>
  );
};
