import { ImageCard } from '@/components/organisms/ImageCard';
import { VStack, Button, Text, Flex } from '@chakra-ui/react';

export const HomeContact: React.FC = () => {
  return (
    <VStack w='full' justify='center'>
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

          <Button colorScheme='green' w='50%'>
            公式LINE
          </Button>
          <Text fontSize={{ base: 'lg', lg: 'xl' }}>
            公式LINEアカウントにてお問い合わせください！
          </Text>
        </Flex>
      </ImageCard>
    </VStack>
  );
};
