import {
  VStack,
  Text,
  Image,
  HStack,
  Flex,
  Divider,
  Box,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <VStack gap='1rem' px={{ base: '0', md: '8rem' }}>
      <Text fontSize='4xl' mt='8rem' fontWeight='bold'>
        ショップ紹介
      </Text>
      <Text
        wordBreak='keep-all'
        overflowWrap='anywhere'
        textAlign='center'
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        px='1rem'
      >
        たびんちゅ 宮古島は
        <wbr />
        2024年5月にOPEN！
        <br />
        20代で脱サラした旅人2人が運営する
        <wbr />
        マリンショップです。
      </Text>

      <HStack
        justify='space-between'
        align='flex-start'
        my='2.5rem'
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <Image
          src='about/about.png'
          alt='about'
          boxSize={{ base: '100%', sm: '40%' }}
          objectFit='cover'
        />
        <Text
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
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
      </HStack>

      <Text fontSize='4xl' mt='8rem' fontWeight='bold'>
        スタッフ紹介
      </Text>
      {/* -------------------------------- */}
      <Box mb='4rem'>
        <Flex
          justify='space-evenly'
          align='flex-start'
          flexDir={{ base: 'column', md: 'row' }}
          mt='2rem'
        >
          <VStack width='full'>
            <Image
              src='about/staff_hiroki.png'
              borderRadius='full'
              boxSize='200px'
              alt='staff'
            />
            <Text fontSize='2xl' fontWeight='bold'>
              ヒロキ
            </Text>
          </VStack>

          <Text
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            wordBreak='keep-all'
            overflowWrap='anywhere'
            textAlign='left'
            px='0.5rem'
          >
            水中カメラマンのヒロキです！
            <br />
            いつも一眼レフで写真を撮っています！
            <br />
            <br />
            広島県広島市出身の24歳。
            <br />
            広島の高専を卒業後、東京で電気メーカーのTV設計の仕事に3年弱従事していました。
            2023年に退職をして趣味で始めた水中カメラを極める為に
            宮古島への移住を決意しました。
            <br />
            海はもともと好きで高校２年生でスキューバダイビングのライセンスを取得するほどです。
            <br />
            僕たちのツアーで皆様の宮古島での素敵な思い出を残すお手伝いをさせてください。
            <br />
            全力でガイドをしていきます！
            <br />
            <br />
            <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
              資格
            </span>
            <br />
            ・NAUI スキンダイビングインストラクター
            <br />
            ・NAUI First Aider
            <br />
            ・NAUISkindiving Rescue Specialty Diver
            <br />
            ・フリーダイビング AIDA2
            <br />
            ・PADI ADVANCED OPEN WATER DIVER
          </Text>
        </Flex>

        {/* -------------------------------- */}

        <Divider />
        <Flex
          justify='space-evenly'
          align='flex-start'
          flexDir={{ base: 'column', md: 'row' }}
          mt='2rem'
        >
          <VStack width='68%'>
            <Image
              src='about/staff_charlie.png'
              borderRadius='full'
              boxSize='200px'
              alt='staff'
            />
            <Text fontSize='2xl' fontWeight='bold'>
              チャーリー
            </Text>
          </VStack>

          <Text
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            wordBreak='keep-all'
            overflowWrap='anywhere'
            textAlign='left'
            px='0.5rem'
          >
            初めまして。チャーリーです。
            <br />
            <br />
            シンガポール生まれ、奈良育ちの31歳。
            <br />
            大学を卒業後に大阪で化学品専門商社で営業の仕事を6年間従事していました。
            <br />
            2022年に退職し兼ねてより挑戦してみたかった自転車旅に出発。様々な縁が繋がり宮古島にたどり着きました。
            <br />
            現在は「Tabibito Cafe」という名称でCafeを経営しております。
            <br />
            僕は宮古島に来るまでは海とは無縁の生活を送っていましたが、宮古島の海の美しさに感動して、そのままこの地に移住。
            <br />
            この感動をたくさんの方に知ってもらいたく、たびんちゅを開業すること決意しました。
            <br />
            みなさまとお会いできることを楽しみにしています！
            <br />
            <br />
            <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
              資格
            </span>
            <br />
            ・NAUI スキンダイビングインストラクター
            <br />
            ・NAUI First Aider
            <br />
            ・NAUISkindiving Rescue Specialty Diver
            <br />
            ・フリーダイビング AIDA2,AIDA3
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
};

export default About;
