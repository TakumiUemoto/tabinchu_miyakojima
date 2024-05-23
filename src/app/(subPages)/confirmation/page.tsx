import { NextPage } from 'next';
import { TeamsOfServices } from '../confirmation/templates/teams_of_services';
import { ConfirmCheckList } from '../confirmation/templates/confirm_check_list';
import { Flex } from '@chakra-ui/react';

const Confirmation: NextPage = () => {
  return (
    <Flex flexDir='column' gap='3rem' pt='8rem'>
      <ConfirmCheckList />
      <TeamsOfServices />
    </Flex>
  );
};

export default Confirmation;
