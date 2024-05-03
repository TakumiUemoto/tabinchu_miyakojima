import { Center, Text, Flex, VStack } from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';
import { useState, useEffect } from 'react';

export const HomeAbout: React.FC = () => {
  const [imageRender, setImageRender] = useState('top/about_tour.png');
  const [imageSize, setImageSize] = useState({ width: 650, height: 850 });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setImageRender('top/about_tour_mini.png');
        setImageSize({ width: 350, height: 450 });
      } else {
        setImageRender('top/about_tour.png');
        setImageSize({ width: 650, height: 850 });
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
      <Center display='flex' flexDir='column' w='full'>
        <Flex
          justify='center'
          align='center'
          flexDir='column'
          gap={{ base: '1.5rem', md: '3rem' }}
        >
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

          <ExportedImage
            src={imageRender}
            alt={imageRender?.split('.')[0]}
            width={imageSize.width}
            height={imageSize.height}
            loading='lazy'
          />
        </Flex>
      </Center>
    </VStack>
  );
};
