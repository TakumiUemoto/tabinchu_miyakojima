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
  title: siteName,
  description: description,
  openGraph: {
    title: siteName,
    description,
    url: process.env.NEXT_PUBLIC_URL,
    siteName: siteName,
    images: [
      {
        // TODO: 適当サンプル画像
        url: 'https://www.photo-ac.com/main/detail/3083217?title=%E5%AE%AE%E5%8F%A4%E5%B3%B6%E3%80%80%E7%A0%82%E5%B1%B1%E3%83%93%E3%83%BC%E3%83%81',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ja-JP',
    type: 'website',
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
