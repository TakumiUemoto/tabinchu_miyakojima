import { Flex, Heading, VStack, Link, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

import useMediaQuery from '@/lib/hooks/useMediaQuery';

const links = [
  { title: 'Q & A', href: '#' },
  {
    title: '利用規約・キャンセルポリシー',
    href: '#',
  },
];

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
          src='logo/skeleton_text.jpg'
          boxSize={{ base: '50px', md: '80px' }}
          alt='logo'
        />

        <VStack flex={1}>
          <Heading size='md' mb='0.5rem'>
            たびんちゅ宮古島
          </Heading>
          <Flex
            justify='center'
            textAlign='center'
            flexDir={{ base: 'column', sm: 'row' }}
            gap={{ base: '1rem', sm: '0' }}
          >
            {links.map((link, i) => (
              <Flex key={link.title} justify='center'>
                <Link fontWeight='bold' href={link.href}>
                  {link.title}
                </Link>
                {!isMobile && links.length !== i + 1 && (
                  <Text mx='1.5rem'>/</Text>
                )}
              </Flex>
            ))}
          </Flex>
          <small>&copy;2024 たびんちゅ宮古島</small>
        </VStack>
      </Flex>
    </footer>
  );
};
