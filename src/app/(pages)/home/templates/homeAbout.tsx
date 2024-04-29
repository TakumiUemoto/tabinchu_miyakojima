import { Center, Text, Flex, VStack, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const HomeAbout: React.FC = () => {
  const [imageRender, setImageRender] = useState('home/about_tour.png');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setImageRender('home/about_tour_mini.png');
      } else {
        setImageRender('home/about_tour.png');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <VStack id='about' w='full'>
      <Center display='flex' flexDir='column' gap='1.5rem' w='full'>
        <Flex justify='center' align='center' flexDir='column'>
          <Text
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
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

          <Image
            src={imageRender}
            alt={imageRender?.split('.')[0]}
            mt='1rem'
            maxW={{ base: '80%', lg: '70%' }}
          />
        </Flex>
      </Center>
    </VStack>
  );
};
