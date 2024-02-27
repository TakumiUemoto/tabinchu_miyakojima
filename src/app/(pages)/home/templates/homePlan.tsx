import { ImageCard } from '@/components/organisms/ImageCard';
import { PlanCard } from '@/components/organisms/PlanCard';
import { VStack, Heading, Flex, Button, Text } from '@chakra-ui/react';

export const HomePlan: React.FC = () => {
  return (
    <VStack w='full'>
      <Heading fontSize='3xl'>Tour Plan</Heading>
      <Text fontSize='4xl'>ツアープラン</Text>

      <Flex flexDir='column' gap='0.5rem' w='full'>
        <ImageCard imagePath='sea/main_sea_plan_all.jpg'>
          <VStack textAlign='center' color='white' fontWeight='bold'>
            <Heading size={{ base: 'md', lg: 'lg' }}>
              一眼レフで撮影した
            </Heading>
            <Heading size={{ base: 'md', lg: 'lg' }}>
              写真を無料プレゼント！
            </Heading>
            <Text size={{ base: 'xs', md: 'sm', lg: 'md' }}>
              水中・水上どこでも沢山撮影します！
            </Text>
            <Button colorScheme='whiteAlpha'>すべてのプランを見る</Button>
          </VStack>
        </ImageCard>

        {[
          {
            imagePath: 'sea/main_sea_plan_1.jpg',
            heading: (
              <Heading size={{ base: 'md', lg: 'lg' }}>
                ウミガメ観察ツアー
              </Heading>
            ),
            content: (
              <>
                <Text size={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  ウミガメを泳ぎながら観察、
                  <br />
                  写真撮影後にはサンゴ礁へ！
                </Text>
              </>
            ),
            buttonText: 'プランを見る',
          },
          {
            imagePath: 'sea/main_sea_plan_2.jpg',
            heading: (
              <Heading size={{ base: 'md', lg: 'lg' }}>
                SUPクルージングツアー
              </Heading>
            ),
            content: (
              <>
                <Text>二人貸切なので安心、安全！</Text>
              </>
            ),
            buttonText: 'プランを見る',
          },
          {
            imagePath: 'sea/main_sea_plan_3.jpg',
            heading: (
              <Heading size={{ base: 'md', lg: 'lg' }} textAlign='center'>
                シュノーケリング&SUP
                <br />
                セットツアー
              </Heading>
            ),
            content: (
              <>
                <Text size={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  シュノーケルもSUPも楽しめる
                  <br />
                  お得なプラン
                </Text>
              </>
            ),
            buttonText: 'プランを見る',
          },
          {
            imagePath: 'sea/main_sea_plan_4.jpg',
            heading: (
              <Heading size={{ base: 'md', lg: 'lg' }} textAlign='center'>
                サンセットSUP
                <br />
                クルージングツアー
              </Heading>
            ),
            content: (
              <>
                <Text size={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  海に沈む夕日を見ながら
                  <br />
                  クルージング！
                </Text>
              </>
            ),
            buttonText: 'プランを見る',
          },
        ].map((plan, index) => (
          <PlanCard
            key={index}
            imagePath={plan.imagePath}
            heading={plan.heading}
            content={plan.content}
            buttonText={plan.buttonText}
          />
        ))}
      </Flex>
    </VStack>
  );
};
