import { ImageCard } from '@/components/organisms/ImageCard';
import { VStack, Button, Text } from '@chakra-ui/react';

export const HomeContact: React.FC = () => {
  return (
    <VStack w='full' justify='center'>
      {/* <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Contact</Heading> */}
      <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} mb='1rem'>
        お問い合わせ
      </Text>
      <ImageCard imagePath='home/contact.jpg'>
        <VStack textAlign='center' color='white' fontWeight='bold'>
          <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
            ツアーのご質問やご相談、
            <br />
            その他お問い合わせがございましたら
          </Text>

          <Button colorScheme='green' w='50%'>
            公式LINE
          </Button>
          <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
            公式LINEアカウントにてお問い合わせください！
          </Text>
        </VStack>
      </ImageCard>
    </VStack>
  );
};
