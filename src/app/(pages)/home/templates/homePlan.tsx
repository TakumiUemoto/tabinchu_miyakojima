import { PlanCard } from '@/components/organisms/PlanCard';
import { VStack, Heading, Flex, Text } from '@chakra-ui/react';

export const HomePlan: React.FC = () => {
  return (
    <VStack w='full'>
      <Text fontSize='4xl'>ツアー内容</Text>

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
                  size={{ base: 'md', md: 'lg', lg: 'xl' }}
                  wordBreak='keep-all'
                  overflowWrap='anywhere'
                  fontWeight={600}
                >
                  ライフジャケットを着用します。
                  <br />
                  初心者の方でも安心してお楽しみいただけるツアーです。
                </Text>
              ),
              buttonText: 'ツアー詳細',
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
                  size={{ base: 'md', md: 'lg', lg: 'xl' }}
                  wordBreak='keep-all'
                  overflowWrap='anywhere'
                  fontWeight={600}
                >
                  ライフジャケットなしで泳げる
                  <br />
                  中級者向けのツアーです。
                </Text>
              ),
              buttonText: 'ツアー詳細',
            },
            {
              imagePath: 'home/plan_sup.jpg',
              heading: (
                <Heading size={{ base: 'lg', lg: 'xl' }} textAlign='center'>
                  SUP & Cafe
                </Heading>
              ),
              content: (
                <Text
                  size={{ base: 'md', md: 'lg', lg: 'xl' }}
                  wordBreak='keep-all'
                  overflowWrap='anywhere'
                  fontWeight={600}
                >
                  Tabibito cafe の軽食付きツアーです。
                </Text>
              ),
              buttonText: 'ツアー詳細',
            },
          ].map((plan, i) => (
            <PlanCard
              key={`${plan.heading}-${i}`}
              variant='summary'
              imagePath={plan.imagePath}
              heading={plan.heading}
              content={plan.content}
              buttonText={plan.buttonText}
            />
          ))}
        </Flex>
      </Flex>
    </VStack>
  );
};
