import { Flex } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';

export const InstagramButton: React.FC = () => {
  return (
    <Flex
      justify='center'
      align='center'
      as='button'
      height='60px'
      px='2rem'
      borderRadius='0.3rem'
      lineHeight='1.2'
      fontSize='1rem'
      fontWeight='semibold'
      bgGradient='linear(to-br, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)'
      color='#fff'
      _hover={{ opacity: 0.9 }}
      _active={{ opacity: 0.8 }}
    >
      <FaInstagram style={{ marginRight: '0.5rem' }} />
      Instagram
    </Flex>
  );
};
