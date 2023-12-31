import type { Metadata, Viewport } from 'next';
import { Open_Sans, Alata } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cva } from 'class-variance-authority';
import localFont from 'next/font/local';

import './globals.css';

// Note: for headings
const tanMonCheri = localFont({
  src: '../fonts/TAN-MONCHERI.woff2',
  display: 'swap',
  variable: '--font-moncheri',
});

// Note: for logo
const katibeh = localFont({
  src: '../fonts/Katibeh-Regular.woff2',
  display: 'swap',
  variable: '--font-katibeh',
});

// Note: for more heading
const alata = Alata({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alata',
  display: 'swap',
});

// Note: default sans font
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Bethany Bishop',
    default: 'Bethany Bishop',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const styles = cva([
  katibeh.variable,
  openSans.variable,
  alata.variable,
  tanMonCheri.variable,
  'bg-white',
  'font-sans',
]);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex,nofollow" />
      <body className={styles()}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
