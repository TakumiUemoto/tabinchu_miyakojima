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
      <Center display='flex' flexDir='column' gap='1.5rem' w='full'>
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
