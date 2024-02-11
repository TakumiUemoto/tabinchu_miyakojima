import { Image } from '@chakra-ui/image';
import { Flex, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';

export const Header: React.FC = () => {
  return (
    <Flex
      align='center'
      justify='space-between'
      position='fixed'
      top='0'
      w='full'
      p='0.5rem 1rem'
      zIndex={100}
      bgColor='lightskyblue'
    >
      <Flex align='center' gap='1rem'>
        <Image
          src='tabinchu_logo.jpg'
          borderRadius='full'
          boxSize='65px'
          alt='tabinchu_logo'
        />
        <Link as={NextLink} href={'#'}>
          Home
        </Link>
      </Flex>

      <Flex gap='2rem'>
        <Link as={NextLink} href={'#'}>
          About
        </Link>
        <Link as={NextLink} href={'#'}>
          プラン・料金
        </Link>
        <Link as={NextLink} href={'#'}>
          よくある質問
        </Link>
        <Link as={NextLink} href={'#'}>
          お問い合わせ
        </Link>
      </Flex>
    </Flex>
  );
};
