import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import localFont from 'next/font/local';

import type { Metadata } from 'next';
import './globals.css';

const font = localFont({
  src: './font/Mamelon-4HiRegular.woff2',
  display: 'swap',
});

const siteName = '宮古島マリンショップ たびんちゅ宮古島';
const description = 'たびんちゅ宮古島の説明だよ。';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
  title: siteName,
  description: description,
  alternates: {
    canonical: '/',
    languages: {
      'ja-JP': 'ja-JP',
    },
  },
  openGraph: {
    title: siteName,
    description,
    url: process.env.NEXT_PUBLIC_URL,
    siteName: siteName,
    locale: 'ja-JP',
    type: 'website',
    images: {
      url: `${process.env.NEXT_PUBLIC_URL}/opengraph-image.jpg`,
      width: 1200,
      height: 630,
      alt: siteName,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={`${font.className}`}>
        <ChakraProvider cssVarsRoot='body'>{children}</ChakraProvider>
      </body>
    </html>
  );
}
