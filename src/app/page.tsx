'use client';

import { redirect } from 'next/navigation';

import { NextPage } from 'next';
import { useLayoutEffect } from 'react';

const Page: NextPage = () => {
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      redirect('/home');
    }
  });
  return <></>;
};
export default Page;
