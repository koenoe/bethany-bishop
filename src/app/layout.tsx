import type { Metadata, Viewport } from 'next';
import { Alata } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cva } from 'class-variance-authority';
import localFont from 'next/font/local';

import './globals.css';

// Note: for body text
const optima = localFont({
  src: [
    {
      path: '../fonts/Optima-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../fonts/Optima-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../fonts/Optima-Italic.woff2',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: '../fonts/Optima-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: '../fonts/Optima-ExtraBlack.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-optima',
});

// Note: for headings
const PPHatton = localFont({
  src: [
    {
      path: '../fonts/PPHatton-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/PPHatton-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../fonts/PPHatton-Ultralight.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pphatton',
});

// Note: for logo
const katibeh = localFont({
  src: '../fonts/Katibeh-Regular.woff2',
  display: 'swap',
  variable: '--font-katibeh',
});

// Note: for alternate heading
const alata = Alata({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alata',
  display: 'swap',
});

const styles = cva([
  katibeh.variable,
  optima.variable,
  alata.variable,
  PPHatton.variable,
  'bg-beige',
  'font-sans',
  'text-midnight',
  'antialiased',
]);

export const runtime = 'edge';

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
