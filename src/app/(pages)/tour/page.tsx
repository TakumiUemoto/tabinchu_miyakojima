'use client';

import type { NextPage } from 'next/types';
import { PriceList } from './templates/priceList';
import { TourProcess } from './templates/tourProcess';

const Tour: NextPage = () => {
  return (
    <>
      <PriceList />
      <TourProcess />
    </>
  );
};

export default Tour;
