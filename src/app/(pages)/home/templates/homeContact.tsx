import { ImageCard } from '@/components/organisms/ImageCard';
import { VStack, Heading, Button, Text, Flex } from '@chakra-ui/react';

export const HomeContact: React.FC = () => {
  return (
    <VStack w='full'>
      <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Contact</Heading>
      <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>お問い合わせ</Text>
      <ImageCard imagePath='sea/main_sea_contact.jpg'>
        <VStack textAlign='center' color='white' fontWeight='bold'>
          <Text fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}>
            お気軽にご相談ください。
          </Text>
          <Text
            w='85%'
            wordBreak='keep-all'
            overflowWrap='anywhere'
            textAlign='center'
            fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
          >
            ご予約の関するご相談
            <wbr />・<wbr />
            その他お問い合わせは
            <wbr />
            公式LINEアカウントまで
          </Text>

          <Flex gap='1rem' pt='1rem' flexDir={{ base: 'column', md: 'row' }}>
            <Button colorScheme='whiteAlpha' w='full'>
              お問い合わせ
            </Button>
            <Button colorScheme='green' w='full'>
              公式LINEはこちら
            </Button>
          </Flex>
        </VStack>
      </ImageCard>
    </VStack>
  );
};
