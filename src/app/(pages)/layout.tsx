'use client';

import React from 'react';

import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
