'use client';

import { NextPage } from 'next';
import { useLayoutEffect } from 'react';

const TopPage: NextPage = () => {
  useLayoutEffect(() => {
    window.location.href = '/home';
  }, []);
  return <></>;
};

export default TopPage;
