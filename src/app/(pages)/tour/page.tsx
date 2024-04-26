import { TourCard } from '@/components/organisms/TourCard';
import type { NextPage } from 'next/types';

const Tour: NextPage = () => {
  return (
    <>
      <TourCard variant='detail' imagePath='' heading={<></>} content={<></>} />
    </>
  );
};

export default Tour;
