import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Shop } from './templates/shop';
import { Staff } from './templates/staff';

const About: NextPage = () => {
  return (
    <VStack gap='2rem' px={{ base: '0', md: '8rem' }}>
      <Shop />
      <Staff />
    </VStack>
  );
};

export default About;
