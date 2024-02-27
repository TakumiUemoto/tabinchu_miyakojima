import { Flex, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Flex justify='center' align='center' flexDir='column' gap='2rem' pt='5rem'>
      <Heading size='4xl'>404 Not Found.</Heading>
      <Text size='6xl'>指定されたURLにはページが存在しません。</Text>
      <Link as={NextLink} href='/home' color='blue' textDecoration='underline'>
        ホームへ戻る
      </Link>
    </Flex>
  );
}
