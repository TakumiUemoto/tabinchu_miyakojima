import { PlanCard } from '@/components/organisms/PlanCard';
import { VStack, Heading, Flex, Text } from '@chakra-ui/react';

export const HomePlan: React.FC = () => {
  return (
    <VStack w='full'>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        ツアー内容
      </Text>

      <Flex flexDir='column' w='full'>
        <Flex flexDir={{ base: 'column', '2xl': 'row' }} gap='2rem'>
          {[
            {
              imagePath: 'home/plan_snorkel.jpg',
              heading: (
                <Heading size={{ base: 'lg', lg: 'xl' }}>シュノーケル</Heading>
              ),
              content: (
                <Text
                  size={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  wordBreak='keep-all'
                  overflowWrap='anywhere'
                  fontWeight='bold'
                >
                  ライフジャケットを着用します。
                  <br />
                  初心者の方でも安心してお楽しみいただけるツアーです。
                </Text>
              ),
              buttonText: 'ツアー詳細',
              buttonLink: '/plan',
            },
            {
              imagePath: 'home/plan_skin.jpg',
              heading: (
                <Heading size={{ base: 'lg', lg: 'xl' }}>
                  スキンダイビング
                </Heading>
              ),
              content: (
                <Text
                  size={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  wordBreak='keep-all'
                  overflowWrap='anywhere'
                  fontWeight='bold'
                >
                  ライフジャケットなしで泳げる
                  <br />
                  中級者向けのツアーです。
                </Text>
              ),
              buttonText: 'ツアー詳細',
              buttonLink: '/plan',
            },
            {
              imagePath: 'home/plan_sup.jpg',
              heading: (
                <Heading size={{ base: 'lg', lg: 'xl' }} textAlign='center'>
                  SUP & ピクニック
                </Heading>
              ),
              content: (
                <Text
                  size={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  fontWeight='bold'
                >
                  Tabibito cafe の軽食付きツアーです。
                </Text>
              ),
              buttonText: 'ツアー詳細',
              buttonLink: '/plan',
            },
          ].map((plan, i) => (
            <PlanCard
              key={`${plan.heading}-${i}`}
              variant='summary'
              imagePath={plan.imagePath}
              heading={plan.heading}
              content={plan.content}
              buttonText={plan.buttonText}
              buttonLink={plan.buttonLink}
            />
          ))}
        </Flex>
      </Flex>
    </VStack>
  );
};
