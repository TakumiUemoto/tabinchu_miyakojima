'use client';

import React from 'react';

import { Flex, VStack } from '@chakra-ui/react';

import { HomeMain } from './templates/homeMain';
import { HomeAbout } from './templates/homeAbout';
import { HomeTour } from './templates/homeTour';
import { HomeReservation } from './templates/homeReservation';
import { HomeContact } from './templates/homeContact';
import { NextPage } from 'next/types';
import HomePhotoGallery from './templates/homePhotoGallery';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <VStack gap='5rem'>
        <HomeMain />
        <Flex
          justify='center'
          align='center'
          flexDir='column'
          gap='4rem'
          w={{ base: 'full', md: '90%', lg: '80%' }}
          p={{ base: 0, md: '1rem', lg: '2rem' }}
          mb='4rem'
        >
          <HomeAbout />
          <HomeTour />
          <HomeReservation />
          <HomePhotoGallery />
          <HomeContact />
        </Flex>
      </VStack>

      <Footer />
    </>
  );
};

export default Home;
