import { Flex, Divider, Box, Image, Text } from '@chakra-ui/react';

export const Staff: React.FC = () => {
  return (
    <>
      <Text fontSize='4xl' fontWeight='bold'>
        スタッフ紹介
      </Text>
      <Box mb='4rem'>
        <Flex
          justify='space-between'
          align='flex-start'
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <Flex
            justify='center'
            align='center'
            flexDir='column'
            w={{ base: 'full', lg: '30%' }}
            gap='1.5rem'
          >
            <Image
              src='about/staff_hiroki.jpg'
              borderRadius='50%'
              boxSize={{ base: '200px', sm: '250px' }}
              alt='staff'
            />
            <Text fontSize='2xl' fontWeight='bold'>
              ヒロキ
            </Text>
          </Flex>

          <Box w={{ base: 'full', lg: '70%' }} mt='1.5rem'>
            <Text
              fontSize={{ base: 'md' }}
              wordBreak='keep-all'
              overflowWrap='anywhere'
              textAlign='left'
              px={{ base: '1rem', md: '0.5rem' }}
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
              ・NAUI Skindiving Rescue Specialty Diver
              <br />
              ・フリーダイビング AIDA2
              <br />
              ・PADI ADVANCED OPEN WATER DIVER
            </Text>
          </Box>
        </Flex>

        <Divider my='4rem' />

        <Flex
          justify='space-between'
          align='flex-start'
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <Flex
            justify='center'
            align='center'
            flexDir='column'
            w={{ base: 'full', lg: '30%' }}
            gap='1.5rem'
          >
            <Image
              src='about/staff_charlie.jpg'
              borderRadius='50%'
              boxSize={{ base: '200px', sm: '250px' }}
              alt='staff'
            />
            <Text fontSize='2xl' fontWeight='bold'>
              チャーリー
            </Text>
          </Flex>

          <Box w={{ base: 'full', lg: '70%' }} mt='1.5rem'>
            <Text
              fontSize={{ base: 'md' }}
              wordBreak='keep-all'
              overflowWrap='anywhere'
              textAlign='left'
              px={{ base: '1rem', md: '0.5rem' }}
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
              ・NAUI Skindiving Rescue Specialty Diver
              <br />
              ・フリーダイビング AIDA2,AIDA3
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
