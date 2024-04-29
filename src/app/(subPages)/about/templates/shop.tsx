import { Text, Flex, VStack } from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';

export const Shop: React.FC = () => {
  return (
    <VStack id='shop'>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mt='8rem'
        fontWeight='bold'
      >
        ショップ紹介
      </Text>
      <Text
        wordBreak='keep-all'
        overflowWrap='anywhere'
        textAlign='center'
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
        textDecoration='underline'
        textDecorationThickness='0.5rem'
        textDecorationColor='yellow'
        textUnderlineOffset='-0.2rem'
        sx={{ textDecorationSkipInk: 'none' }}
        px='1rem'
      >
        たびんちゅ 宮古島は
        <wbr />
        2024年5月にOPEN!
        <br />
        20代で脱サラした旅人2人が運営する
        <wbr />
        マリンショップです。
      </Text>

      <Flex
        justify='space-between'
        align={{ base: 'center', md: 'flex-start' }}
        my='2.5rem'
        gap='1.5rem'
        flexDir={{ base: 'column', md: 'row' }}
      >
        <ExportedImage
          src='about/about.jpg'
          alt='about'
          width={300}
          height={450}
        />
        <Text
          fontSize={{ base: 'md' }}
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          px='0.5rem'
        >
          ショップ名の由来は
          <br />
          沖縄の方言で旅人のことを
          <wbr />
          「たびんちゅ」と言うことから来ています。
          <br />
          僕たちのこれまでの人生の中で、
          <wbr />
          サラリーマンという身分を捨て
          <br />
          人生を旅するように自由に生きたい
          <br />
          という思いがあります。
          <br />
          僕たちの共通認識である、
          <wbr />
          「旅をするように自由に人生を謳歌する」
          <br />
          という想いを込めています。
          <br />
          <br />
          たびんちゅ 宮古島は、
          <wbr />
          ビーチエントリーで
          <br />
          シュノーケル・SUP・スキンダイビングの
          <br />
          アクティビティを提供します。
          <br />
          <br />
          お客様の
          <wbr />
          「やりたいこと・見たいもの」
          <br />
          お客様に寄り添ったツアーを
          <wbr />
          提案いたします。
          <br />
          私たちはそれを「オーダーメイドツアー」
          <wbr />
          と呼んでいます。
        </Text>
      </Flex>
    </VStack>
  );
};
