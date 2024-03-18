'use client';

import React from 'react';

import { Flex, VStack } from '@chakra-ui/react';

import { HomeMain } from './templates/homeMain';
import { HomeAbout } from './templates/homeAbout';
import { HomePlan } from './templates/homePlan';
import { HomeReservation } from './templates/homeReservation';
// import { HomeQuestion } from './templates/homeQuestion';
import { HomeContact } from './templates/homeContact';
import { NextPage } from 'next/types';

const Home: NextPage = () => {
  return (
    <VStack gap='5rem'>
      <HomeMain />
      <Flex
        justify='center'
        align='center'
        flexDir='column'
        gap='4rem'
        w={{ base: 'full', md: '90%', lg: '80%' }}
        p={{ base: 0, md: '1rem', lg: '2rem' }}
      >
        <HomeAbout />
        <HomePlan />
        <HomeReservation />
        {/* <HomeQuestion /> */}
        <HomeContact />
      </Flex>
    </VStack>
  );
};

export default Home;
