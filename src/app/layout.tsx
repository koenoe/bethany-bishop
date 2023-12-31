import type { Metadata, Viewport } from 'next';
import { Katibeh, Playfair, Questrial, Alata } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

// Note: for logo
const katibeh = Katibeh({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-katibeh',
});

// Note: for main heading
const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
});

// Note: for more heading
const alata = Alata({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alata',
});

// Note: default sans font
const questrial = Questrial({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-questrial',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex,nofollow" />
      <body
        className={`${katibeh.variable} ${playfair.variable} ${questrial.variable} ${alata.variable} bg-white font-sans`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
