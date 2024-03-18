import { Image } from '@chakra-ui/image';
import { Center, Button, Text, Flex, Heading, VStack } from '@chakra-ui/react';

import styles from './templates.module.scss';

export const HomeMain: React.FC = () => {
  return (
    <Center
      justifyContent={{ base: 'center', md: 'space-evenly' }}
      flexDir='column'
      height='100dvh'
      color='white'
      fontWeight='bold'
      className={styles.main}
    >
      <Image
        src='logo_transparent.jpg'
        objectFit='cover'
        borderRadius='full'
        boxSize={{ base: '400px', md: '550px', xl: '650px' }}
        alt='logo_transparent'
      />
      <VStack>
        <Text
          fontSize={{ base: 'sm', sm: 'lg', md: 'xl', lg: '2xl' }}
          w='auto'
          p='0.25rem'
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          bg='rgba(0,0,0, 0.35)'
        >
          脱サラ水中カメラマンと
          <wbr />
          cafeを営む旅人が運営しています。
        </Text>
        <Heading
          fontSize={{ base: 'lg', sm: '2xl', md: '3xl', lg: '4xl' }}
          w='auto'
          p='0.25rem'
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          bg='rgba(0,0,0, 0.35)'
        >
          『1組貸切 オーダーメイドツアー』
        </Heading>
      </VStack>

      <Flex
        gap='1.5rem'
        flexDir={{ base: 'column', sm: 'row' }}
        mt={{ base: '1.5rem', md: '0' }}
        mb={{ base: '0', md: '1.5rem' }}
        bg='rgba(0,0,0, 0.35)'
      >
        <Button colorScheme='whiteAlpha' size='lg' w='full'>
          予約状況
        </Button>
        <Button colorScheme='whiteAlpha' size='lg' w='full'>
          予約・問い合わせ
        </Button>
      </Flex>
    </Center>
  );
};
