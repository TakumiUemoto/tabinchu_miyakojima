import { InstagramButton } from '@/components/molecules/InstagramButton';
import { Center, Heading, Button, Text, Flex, VStack } from '@chakra-ui/react';

export const HomeAbout: React.FC = () => {
  return (
    <VStack w='full'>
      <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>About</Heading>
      <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
        たびんちゅ宮古島
      </Text>

      <Center display='flex' flexDir='column' gap='1.5rem' w='full'>
        <Text
          fontSize='sm'
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          w='90%'
        >
          たびんちゅ宮古島は脱サラ水中カメラマンと
          <wbr />
          cafeを営む旅人が運営しています。
          <br />
          シュノーケル
          <wbr />・<wbr />
          スキンダイビング
          <wbr />・<wbr />
          SUPを
          <wbr />
          専門とする
          <wbr />
          マリンショップです。
        </Text>
        <Flex
          justify={{ base: 'center', md: 'space-between' }}
          align='center'
          flexDir={{ base: 'column', md: 'row' }}
          gap='1rem'
          w={{ base: '80%', md: '70%', lg: '60%' }}
        >
          <Button colorScheme='teal' size='lg' w='full'>
            たびんちゅ宮古島について
          </Button>
          <InstagramButton w='full' />
        </Flex>
      </Center>
    </VStack>
  );
};
