import { Center, Heading, Button, Text, Flex } from '@chakra-ui/react';

import styles from './templates.module.scss';

export const HomeMain: React.FC = () => {
  return (
    <Center
      flexDir='column'
      gap='1.5rem'
      height='100dvh'
      color='white'
      fontWeight='bold'
      className={styles.main}
    >
      <Heading
        fontSize={{
          base: '4xl',
          sm: '5xl',
          md: '6xl',
          lg: '7xl',
          xl: '8xl',
          '2xl': '9xl',
        }}
        bg='rgba(0,0,0, 0.25)'
      >
        MiyakoJima
        <br />
        Marin Activity.
      </Heading>
      <Text
        w='auto'
        wordBreak='keep-all'
        overflowWrap='anywhere'
        textAlign='center'
        bg='rgba(0,0,0, 0.25)'
      >
        たびんちゅ宮古島は、
        <wbr />
        シュノーケリング・SUP専門店です。
      </Text>
      <Flex gap='1rem' flexDir={{ base: 'column', sm: 'row' }} mt='1rem'>
        <Button colorScheme='blackAlpha' size='lg' w='full'>
          プランを見る
        </Button>
        <Button colorScheme='blackAlpha' size='lg' w='full'>
          予約する
        </Button>
      </Flex>
    </Center>
  );
};
