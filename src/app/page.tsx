'use client';

import React from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import styles from '@/app/page.module.css';
import { PlanCard } from '@/components/organisms/PlanCard';
import { StepCard } from '@/components/organisms/StepCard';
import { QuestionCard } from '@/components/organisms/QuestionCard';
import { FaInstagram } from 'react-icons/fa';
import { ImageCard } from '@/components/organisms/ImageCard';

export default function Home() {
  return (
    <VStack gap='4rem' bgColor='#dddddd'>
      <Center
        flexDir='column'
        gap='1rem'
        height='100dvh'
        className={styles.bg_image}
      >
        <Heading fontSize='6xl'>
          MiyakoJima
          <br />
          Marin Activity.
        </Heading>
        <Text>
          たびんちゅ宮古島は、シュノーケリング・スキンダイビング・SUP専門店です。
        </Text>
        <ButtonGroup spacing='6'>
          <Button colorScheme='teal' size='lg'>
            プランを見る
          </Button>
          <Button colorScheme='teal' size='lg'>
            予約する
          </Button>
        </ButtonGroup>
      </Center>

      <Center flexDir='column' gap='1rem' p='3rem'>
        <Heading fontSize='4xl'>About たびんちゅ宮古島</Heading>
        <Text fontSize='sm' textAlign='center'>
          たびんちゅ宮古島は脱サラ水中カメラマンとcafeを営む旅人が運営しています。
          <br />
          シュノーケル・スキンダイビング・SUP・サンセット
        </Text>
        <ButtonGroup>
          <Button colorScheme='pink' size='lg'>
            たびんちゅ宮古島について
          </Button>
          <Button colorScheme='orange' size='lg'>
            <FaInstagram />
            Instagram
          </Button>
        </ButtonGroup>
      </Center>

      <VStack>
        <Heading fontSize='3xl'>Tour Plan</Heading>
        <Text fontSize='4xl'>ツアープラン</Text>

        <Flex flexDir='column' gap='2rem'>
          <ImageCard imagePath='tabinchu_logo.jpg'>
            <VStack textAlign='center'>
              <Heading>
                HP.インスタからの予約のお客様！
                <br />
                ツアー写真と動画を無料でプレゼント！
              </Heading>
              <Text>
                加料金を取らずに沢山撮影します！高画質な写真を無料でプレゼント！
              </Text>
              <Button>すべてのプランを見る</Button>
            </VStack>
          </ImageCard>

          <PlanCard
            imagePath='tabinchu_logo.jpg'
            headingText='一眼レフで撮影した高画質なツアー写真を無料でプレゼント！'
            contentText='写真を一眼レフで沢山撮影します！'
            buttonText='すべてのプランを見る'
          />
          <PlanCard
            imagePath='tabinchu_logo.jpg'
            headingText='①ウミガメと珊瑚礁シュノーケリングツアー'
            contentText='ウミガメを観察して写真撮影後にはサンゴ礁へ！その日出会ったお魚を紹介します♪◎'
            buttonText='プランを見る'
          />
          <PlanCard
            imagePath='tabinchu_logo.jpg'
            headingText='②SUPクルージングツアー'
            contentText='二人貸切なので安心、安全！一緒にSUPクルージングを楽しみましょう！'
            buttonText='プランを見る'
          />
          <PlanCard
            imagePath='tabinchu_logo.jpg'
            headingText='③シュノーケリングとSUPセットツアー'
            contentText='シュノーケルもSUPも楽しめるお得なプランです！'
            buttonText='プランを見る'
          />
          <PlanCard
            imagePath='tabinchu_logo.jpg'
            headingText='④サンセットSUPクルージングツアー'
            contentText='サンセットでインスタ映え！海に沈む夕日を見ながらクルージング！'
            buttonText='プランを見る'
          />
        </Flex>
      </VStack>

      <VStack>
        <Heading fontSize='3xl'>Reservation</Heading>
        <Text fontSize='4xl'>予約方法</Text>

        <Flex>
          <StepCard
            stepNum={1}
            titleText='予約情報の入力'
            contentText='下記ボタンから予約ページを開いて、予約日のご選択、お客様情報のご入力をお願いいたします。'
            buttonText='予約する'
            hasButton
            hasNext
          />
          <StepCard
            stepNum={2}
            titleText='仮予約完了'
            contentText='情報を入力後はまだ仮予約の状態です。
          スタッフが予約当日の天気、予約状況を確認でき次第、メッセージをお送りします。'
            hasButton={false}
            hasNext
          />
          <StepCard
            stepNum={3}
            titleText='本予約完了'
            contentText='スタッフから本予約完了のご連絡をお送りします。ツアー時間、当日の天気、注意事項をお伝えします'
            hasButton={false}
            hasNext
          />
          <StepCard
            stepNum={4}
            titleText='予約当日'
            contentText='送迎ありプランの場合は、スタッフがお迎え先でお客様をお迎えし、海まで一緒に向かいます。'
            hasButton={false}
            hasNext={false}
          />
        </Flex>
      </VStack>

      <VStack gap='1rem'>
        <Heading fontSize='3xl'>Q&A</Heading>
        <Text fontSize='4xl'>よくあるご質問</Text>

        <QuestionCard
          questionText='泳げないのですが大丈夫でしょうか？'
          answerText='参加いただく方は「ウェットスーツ」か「ライフジャケット」、もしくはその両方を着用していただきますので、泳ぎが苦手な方でも問題ありません。これらは「浮力体」と呼ばれ、参加者の体を安全に水面付近に維持する役目を果たします。ですので泳力に関係なく、水面付近より水中世界を散策する事が可能です。'
        />
        <QuestionCard
          questionText='シャワーやメイクをする施設はありますか？'
          answerText='ツアーを行う場所によってシャワー施設がない場合がありますが、ツアー後は宿泊先やシャワー施設がある場所まで送迎が可能ですので、遠慮なくお申し付けください。'
        />
        <QuestionCard
          questionText='子どももいますが参加できますか？'
          answerText='もちろん参加出来ます。小さなお子様でも参加できるように、足入れ型の浮き輪や箱メガネをご用意しています。'
        />
        <QuestionCard
          questionText='一人でも参加出来ますか？'
          answerText='1人でも問題ありません。一緒にツアーを楽しみましょう！'
        />
      </VStack>

      <Box>
        <ImageCard imagePath='tabinchu_logo.jpg'>
          <VStack>
            <Heading fontSize='xl'>Contact</Heading>
            <Text fontSize='4xl'>お気軽にご相談ください。</Text>
            <Text fontSize='xs'>
              ご予約の関するご相談、その他お問い合わせは
              お問い合わせフォームまたは公式LINEアカウントまでお気軽にお問い合わせください。
            </Text>
            <ButtonGroup>
              <Button>お問い合わせフォーム</Button>
              <Button>LINEでお問い合わせ</Button>
            </ButtonGroup>
          </VStack>
        </ImageCard>
      </Box>
    </VStack>
  );
}
