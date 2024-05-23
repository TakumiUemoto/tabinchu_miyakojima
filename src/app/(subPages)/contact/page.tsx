import { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import { QandA } from './templates/q_and_a';
import { Reservation } from './templates/reservation';
import { TeamsOfServices } from './templates/teams_of_services';
import { CancelPolicy } from './templates/cancel_policy';
import { ConfirmCheckList } from './templates/confirm_check_list';

const Contact: NextPage = () => {
  return (
    <Flex flexDir='column' gap='3rem' pt='8rem'>
      <Reservation />
      <CancelPolicy />
      <QandA />
      <ConfirmCheckList />
      <TeamsOfServices />
    </Flex>
  );
};

export default Contact;
