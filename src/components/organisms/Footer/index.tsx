import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
export const Footer: React.FC = () => {
  return (
    <VStack bgColor='darkslategray' py='3rem'>
      <Heading color='white' my='1rem'>
        たびんちゅ宮古島
      </Heading>

      <Flex align='center' gap='0.5rem'>
        <FaInstagram color='white' />
        <Text color='white'>Instagram</Text>
      </Flex>

      <Flex gap='2rem' mb='1rem' color='white'>
        <Link href='#'>HOME</Link>
        <Link href='#'>たびんちゅについて</Link>
        <Link href='#'>ツアー・料金</Link>
        <Link href='#'>よくある質問</Link>
        <Link href='#'>お問い合わせ</Link>
      </Flex>

      <small style={{ color: 'white' }}>&copy;2024 たびんちゅ宮古島</small>
    </VStack>
  );
};
