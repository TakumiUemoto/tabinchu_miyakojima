import { Center, Text, Flex, VStack, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const HomeAbout: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState('md');

  useEffect(() => {
    const handleResize: () => void = () => {
      if (window.innerWidth < 768) {
        setWindowWidth('md');
      } else {
        setWindowWidth('base');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <VStack w='full'>
      {/* <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        たびんちゅ宮古島について
      </Text> */}

      <Center display='flex' flexDir='column' gap='1.5rem' w='full'>
        {/* <Text
          fontSize='sm'
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          w='90%'
        >
          たびんちゅ宮古島は脱サラ水中カメラマンと
          <wbr />
          cafeを営む旅人が運営しています。
          <br />
          シュノーケル
          <wbr />・<wbr />
          スキンダイビング
          <wbr />・<wbr />
          SUPを
          <wbr />
          専門とする
          <wbr />
          マリンショップです。
        </Text> */}

        {/* <Flex
          justify={{ base: 'center', md: 'space-evenly' }}
          align='center'
          flexDir={{ base: 'column', md: 'row' }}
          gap='1rem'
          w={{ base: '80%', md: '70%', lg: '60%' }}
        >
          <NextLink href='/about' passHref>
            <Button colorScheme='teal' size='lg' w={300}>
              たびんちゅ宮古島について
            </Button>
          </NextLink>
          <Link href={process.env.NEXT_PUBLIC_INSTAGRAM} isExternal>
            <InstagramButton />
          </Link>
        </Flex> */}

        <Flex justify='center' align='center' flexDir='column'>
          <Text
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            mb='1rem'
            fontWeight='bold'
          >
            オーダーメイドツアーとは
          </Text>

          <Text
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            wordBreak='keep-all'
            overflowWrap='anywhere'
            textAlign='center'
          >
            お客様の
            <wbr />
            <span style={{ fontWeight: 'bold' }}>
              「やりたいこと」
              <wbr />
              「見たいもの」
            </span>
            <wbr />
            などを事前に伺い
            <br />
            天候などを考慮し、
            <wbr />
            ツアーを提案いたします。
            <br />
            お客様専用のツアーを
            <wbr />
            作ることができます！
          </Text>

          {windowWidth === 'md' ? (
            <Image src='home/about_tour.png' alt='about_tour' mt='1rem' />
          ) : (
            <Image src='home/about_tour_mini.png' alt='about_tour' mt='1rem' />
          )}
        </Flex>
      </Center>
    </VStack>
  );
};
