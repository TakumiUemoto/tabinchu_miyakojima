import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';

type Props = FlexProps;

export const InstagramButton: React.FC<Props> = (props) => {
  const { ...rest } = props;
  return (
    <Flex
      as='button'
      justify='center'
      align='center'
      width='full'
      height='60px'
      borderRadius='0.3rem'
      fontSize='1.1rem'
      fontWeight='semibold'
      bgGradient='linear(to-br, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)'
      color='#fff'
      _hover={{ opacity: 0.9 }}
      _active={{ opacity: 0.8 }}
      {...rest}
    >
      <FaInstagram style={{ marginRight: '1rem' }} />
      <Text>Instagram</Text>
    </Flex>
  );
};
