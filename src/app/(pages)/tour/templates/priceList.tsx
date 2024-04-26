import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const PriceList: React.FC = () => {
  const [textRender, setTextRender] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setTextRender(true);
      } else {
        setTextRender(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <VStack flexDir='column' pt='8rem' mb='1rem'>
      <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight='bold'>
        料金表
      </Text>
      <Flex
        flexDir='column'
        textAlign='right'
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight='bold'
        gap='1rem'
        p={{ base: '1rem 2rem', md: '2rem 4rem' }}
        w={{ base: '90%', sm: 'fit-content' }}
        bgColor='rgba(214,230,245,0.5)'
        borderRadius={{ base: '2.5rem', md: '5rem' }}
      >
        {textRender ? (
          <>
            <Flex justify='space-between' gap='1rem'>
              <Text>🤿 シュノーケル</Text>
              <Text>8,000円</Text>
            </Flex>
            <Flex justify='space-between' gap='1rem'>
              <Text>🏊 スキンダイビング</Text>
              <Text>9,000円</Text>
            </Flex>
            <Flex justify='space-between' gap='1rem'>
              <Text>🏄 SUP</Text>
              <Text>8,000円</Text>
            </Flex>
            <Flex justify='space-between' gap='1rem'>
              <Text>📸 画像編集</Text>
              <Text>2,000円</Text>
            </Flex>
          </>
        ) : (
          <>
            <Flex justify='space-between' gap='1rem'>
              <Text textAlign='center' w='15rem'>
                🤿 シュノーケル 🤿{' '}
              </Text>
              <Text>・・・&nbsp;&nbsp;&nbsp;8,000円</Text>
            </Flex>
            <Flex justify='space-between' gap='1rem'>
              <Text textAlign='center' w='15rem'>
                🏊 スキンダイビング 🏊
              </Text>
              <Text>・・・&nbsp;&nbsp;&nbsp;9,000円</Text>
            </Flex>
            <Flex justify='space-between' gap='1rem'>
              <Text textAlign='center' w='15rem'>
                🏄 SUP 🏄
              </Text>
              <Text>・・・&nbsp;&nbsp;&nbsp;8,000円 </Text>
            </Flex>
            <Flex justify='space-between' gap='1rem'>
              <Text textAlign='center' w='15rem'>
                📸 画像編集 📸
              </Text>
              <Text>・・・&nbsp;&nbsp;&nbsp;2,000円</Text>
            </Flex>
          </>
        )}
      </Flex>

      <Flex
        justify='center'
        align='center'
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        flexDir={{ base: 'column', sm: 'row' }}
        gap='1rem'
        w={{ base: 'full' }}
        mt='1rem'
      >
        <Image
          src='tour/snorkel.jpg'
          alt='tour/snorkel'
          maxW={{ base: '90%', sm: '280px', md: '30%', lg: '25%' }}
        />
        <Image
          src='tour/skin_diving.jpg'
          alt='tour/skin_diving'
          maxW={{ base: '90%', sm: '280px', md: '30%', lg: '25%' }}
        />
        <Image
          src='tour/sup.jpg'
          alt='tour/sup'
          maxW={{ base: '90%', sm: '280px', md: '30%', lg: '25%' }}
        />
      </Flex>
    </VStack>
  );
};
