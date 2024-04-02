import { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import { QandA } from './templates/q_and_a';
import { Reservation } from './templates/reservation';
import { TeamsOfUse } from './templates/teams_of_use';
import { CancelPolicy } from './templates/cancel_policy';

const Contact: NextPage = () => {
  return (
    <Flex flexDir='column' gap='3rem' pt='5rem'>
      <Reservation />
      <QandA />
      <TeamsOfUse />
      <CancelPolicy />
    </Flex>
  );
};

export default Contact;
