import { Button, Text, Flex, VStack, Link } from '@chakra-ui/react';

import styles from './templates.module.scss';
import ExportedImage from 'next-image-export-optimizer';

export const HomeMain: React.FC = () => {
  return (
    <VStack
      id='main'
      justify={{ base: 'center', md: 'space-evenly' }}
      align='center'
      flexDir='column'
      height='100dvh'
      color='white'
      fontWeight='bold'
      className={styles.main}
    >
      <ExportedImage
        src='logo/skeleton_text.webp'
        alt='logo_text_skeleton'
        width={300}
        height={300}
      />
      <VStack pt={{ base: '3rem', md: '0rem' }}>
        <Text
          fontSize={{ base: 'sm', sm: 'lg', md: 'xl', lg: '2xl' }}
          fontWeight='bold'
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
        <Text
          fontSize={{ base: 'lg', sm: '2xl', md: '3xl', lg: '4xl' }}
          w='auto'
          p='0.25rem'
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          bg='rgba(0,0,0, 0.35)'
        >
          『1組貸切 オーダーメイドツアー』
        </Text>
      </VStack>

      <Flex
        gap='1.5rem'
        flexDir={{ base: 'column', sm: 'row' }}
        mt={{ base: '1.5rem', md: '0' }}
        mb={{ base: '0', md: '1.5rem' }}
        bg='rgba(0,0,0, 0.35)'
      >
        <Link href={process.env.NEXT_PUBLIC_TIMETREE} isExternal>
          <Button colorScheme='whiteAlpha' size='lg' w='15rem'>
            予約状況
          </Button>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_LINE} isExternal>
          <Button colorScheme='whiteAlpha' size='lg' w='15rem'>
            予約・問い合わせ
          </Button>
        </Link>
      </Flex>
    </VStack>
  );
};
