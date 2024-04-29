import { TourCard } from '@/components/organisms/TourCard';
import { VStack, Flex, Text } from '@chakra-ui/react';

export const HomeTour: React.FC = () => {
  return (
    <VStack id='tour' w='full'>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        ツアー内容
      </Text>

      <Flex flexDir='column' w='full'>
        <Flex flexDir={{ base: 'column' }} gap='2rem'>
          {[
            {
              imagePath: 'home/tour_snorkel.jpg',
              heading: (
                <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight='bold'>
                  シュノーケル
                </Text>
              ),
              content: (
                <Text
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  wordBreak='keep-all'
                  overflowWrap='anywhere'
                  fontWeight='bold'
                >
                  ＊ライフジャケットを着用してのツアーです。
                </Text>
              ),
              buttonText: 'ツアー詳細',
              buttonLink: '/tour',
            },
            {
              imagePath: 'home/tour_skin.jpg',
              heading: (
                <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight='bold'>
                  スキンダイビング
                </Text>
              ),
              content: (
                <Text
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  wordBreak='keep-all'
                  overflowWrap='anywhere'
                  fontWeight='bold'
                >
                  ※ライフジャケットなしで泳げるツアーです。
                </Text>
              ),
              buttonText: 'ツアー詳細',
              buttonLink: '/tour',
            },
            {
              imagePath: 'home/tour_sup.jpg',
              heading: (
                <Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight='bold'>
                  S U P
                </Text>
              ),
              content: (
                <Text
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  fontWeight='bold'
                >
                  ※Tabibito cafe の軽食付きツアー
                </Text>
              ),
              buttonText: 'ツアー詳細',
              buttonLink: '/tour',
            },
          ].map((tour, i) => (
            <TourCard
              key={`${tour.heading}-${i}`}
              variant='summary'
              imagePath={tour.imagePath}
              heading={tour.heading}
              content={tour.content}
              buttonText={tour.buttonText}
              buttonLink={tour.buttonLink}
            />
          ))}
        </Flex>
      </Flex>
    </VStack>
  );
};
