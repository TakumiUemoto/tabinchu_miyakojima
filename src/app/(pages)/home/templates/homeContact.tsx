import { ImageCard } from '@/components/organisms/ImageCard';
import { VStack, Button, Text, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export const HomeContact: React.FC = () => {
  return (
    <VStack id='contact' w='full' justify='center'>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        お問い合わせ
      </Text>
      <ImageCard imagePath='home/contact.jpg'>
        <Flex
          flexDir='column'
          justify='center'
          align='center'
          gap='1.5rem'
          textAlign='center'
          color='white'
          fontWeight='bold'
        >
          <Text fontSize={{ base: 'lg', lg: 'xl' }}>
            ツアーのご質問やご相談、
            <br />
            その他お問い合わせがございましたら
          </Text>

          <Link as={NextLink} href={process.env.NEXT_PUBLIC_LINE}>
            <Button colorScheme='green' w='15rem'>
              公式LINE
            </Button>
          </Link>
          <Text fontSize={{ base: 'lg', lg: 'xl' }}>
            公式LINEアカウントにてお問い合わせください!
          </Text>
        </Flex>
      </ImageCard>
    </VStack>
  );
};
