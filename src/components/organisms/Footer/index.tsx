import { FaChevronRight } from 'react-icons/fa';
import {
  Flex,
  Heading,
  VStack,
  Link,
  Text,
  Box,
  Divider,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import useMediaQuery from '@/lib/hooks/useMediaQuery';
export const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <footer>
      <VStack color='#F1FADA' bgColor='#265073' p='3rem 0 1rem 0'>
        <Heading size='lg' my='1rem'>
          たびんちゅ宮古島
        </Heading>

        <Flex align='center' gap='0.5rem'>
          <FaInstagram />
          <Link as={NextLink} href={process.env.NEXT_PUBLIC_INSTAGRAM}>
            Instagram
          </Link>
        </Flex>

        <Flex
          justify='center'
          flexDir={{ base: 'column', md: 'row' }}
          rowGap='0.25rem'
          w='85%'
        >
          {[
            { title: 'HOME', href: '#', hasDivider: true },
            { title: 'たびんちゅ宮古島について', href: '#', hasDivider: true },
            { title: 'ツアー・料金', href: '#', hasDivider: true },
            { title: 'よくある質問', href: '#', hasDivider: true },
            { title: 'お問い合わせ', href: '#', hasDivider: false },
          ].map((link) => (
            <Box key={link.title}>
              <Flex
                justify={{ base: 'space-between', md: 'center' }}
                align='center'
              >
                <Link href={link.href}>{link.title}</Link>
                {link.hasDivider && !isMobile && <Text mx='0.5rem'>|</Text>}
                {isMobile && <FaChevronRight />}
              </Flex>
              {isMobile && <Divider my='0.25rem' />}
            </Box>
          ))}
        </Flex>

        <small>&copy;2024 たびんちゅ宮古島</small>
      </VStack>
    </footer>
  );
};
