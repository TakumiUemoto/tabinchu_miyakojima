import { Flex, VStack, Link, Text } from '@chakra-ui/react';

import useMediaQuery from '@/lib/hooks/useMediaQuery';
import ExportedImage from 'next-image-export-optimizer';

const links = [
  { title: 'Q & A', href: '/contact#q_and_a' },
  {
    title: '利用規約',
    href: '/confirmation#teams_of_services',
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
        <ExportedImage
          src='logo/skeleton.webp'
          alt='sleleton_logo'
          width={60}
          height={60}
          loading='lazy'
        />

        <VStack flex={1}>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight='bold'
            size='md'
            mb='0.5rem'
          >
            たびんちゅ宮古島
          </Text>
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
