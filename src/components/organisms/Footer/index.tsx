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
import { Image } from '@chakra-ui/image';

import useMediaQuery from '@/lib/hooks/useMediaQuery';

export const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 650px)');
  return (
    <footer>
      <Flex
        flexDir={!isMobile ? 'row' : 'column'}
        justify='center'
        align='center'
        color='#F1FADA'
        bgColor='rgba(36, 95, 167, 0.9)'
        p='1rem 3rem'
      >
        <Image
          src='logo.jpg'
          boxSize={{ base: '150px', md: '200px' }}
          alt='logo'
        />

        <VStack flex={1}>
          <Heading size='lg' mb='0.5rem'>
            たびんちゅ宮古島
          </Heading>
          <Flex justify='center' flexDir='row'>
            {[
              { title: 'Q & A', href: '#', hasDivider: true },
              {
                title: '利用規約・キャンセルポリシー',
                href: '#',
                hasDivider: false,
              },
            ].map((link) => (
              <Box key={link.title} fontWeight={600}>
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
      </Flex>
    </footer>
  );
};
