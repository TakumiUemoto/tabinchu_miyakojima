import { VStack, Text, Flex, Button } from '@chakra-ui/react';

export const TourProcess: React.FC = () => {
  return (
    <VStack flexDir='column' gap='3rem' pt='5rem'>
      <Text
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        🏖 ツアーの流れ 🤿
      </Text>

      <Flex
        flexDir='column'
        fontSize={{ base: 'lg', md: 'xl' }}
        gap='1.5rem'
        pt={{ base: '2rem', md: '4rem' }}
        pb={{ base: '2rem' }}
        px={{ base: '1rem', md: '4rem' }}
        maxW={{ base: '90%', sm: '80%', md: '70%' }}
        bgColor='rgba(214,230,245,0.5)'
        borderRadius={{ base: '2.5rem', md: '5rem' }}
      >
        <Text fontWeight='bold'>◇集合</Text>
        <Text ml='1.5rem'>
          ビーチでの現地集合、現地解散となります。前日に集合場所や時間をお伝えいたします。
        </Text>

        <Text fontWeight='bold'>◇ツアーの流れ</Text>
        <Text ml='1.5rem'>
          ①受付（同意書の記入）
          <br />
          &nbsp;&nbsp;↓
          <br />
          ②海への準備（着替え・器材のサイズ確認）
          <br />
          &nbsp;&nbsp;↓
          <br />
          ③説明（器材・海について・注意事項など）
          <br />
          &nbsp;&nbsp;↓
          <br />
          ④ツアー!!（約60分〜80分）
          <br />
          &nbsp;&nbsp;↓
          <br />
          ⑤片付け（着替え・清算・写真の受け渡し）
          <br />
          &nbsp;&nbsp;↓
          <br />
          ⑥解散！
        </Text>

        <Text fontWeight='bold'>[写真などデータの受け渡し]</Text>
        <Text ml='1.5rem'>
          清算の際にお渡しできるように写真を読み込みます。
        </Text>
        <Text ml='1.5rem'>
          iPhone: Air Drop or ギガファイル便
          <br />
          Android: LINE or ギガファイル便
        </Text>

        <Flex justify='center'>
          <Button w='15rem' colorScheme='linkedin' size='lg'>
            予約・問い合わせ
          </Button>
        </Flex>
      </Flex>
    </VStack>
  );
};
