import { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import { QandA } from './templates/q_and_a';
import { Reservation } from './templates/reservation';
import { TeamsOfServices } from './templates/teams_of_services';
import { CancelPolicy } from './templates/cancel_policy';

const Contact: NextPage = () => {
  return (
    <Flex flexDir='column' gap='3rem' pt='8rem'>
      <Reservation />
      <CancelPolicy />
      <QandA />
      <TeamsOfServices />
    </Flex>
  );
};

export default Contact;