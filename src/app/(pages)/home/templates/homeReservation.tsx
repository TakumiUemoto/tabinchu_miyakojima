import {
  VStack,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Box,
} from '@chakra-ui/react';
import { StepCard } from '@/components/organisms/StepCard';

export const HomeReservation: React.FC = () => {
  return (
    <VStack w='full'>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        予約からツアー当日の流れ
      </Text>

      <Flex
        justify='center'
        align='center'
        w='full'
        flexWrap='wrap'
        gap={{ base: '1rem', md: '3rem' }}
      >
        {[
          {
            title: '①予約情報の確認',
            content: (
              <Text fontWeight={600}>
                Time Tree にて
                <br />
                ご予約状況を確認できます。
                <br />
                <br />
                予約可能であれば、⭕️が表示されます。
              </Text>
            ),
            button: '予約状況',
            hasButton: true,
            buttonColorScheme: 'orange',
          },
          {
            title: '②公式LINEから予約',
            content: (
              <>
                <Text
                  fontWeight={600}
                  wordBreak='keep-all'
                  overflowWrap='anywhere'
                >
                  公式LINEから
                  <wbr />
                  予約を受け付けています。
                </Text>
                <br />
                <Text fontWeight={600} color='red'>
                  ※スタッフからの予約確定の連絡を受け予約確定とします。
                </Text>
              </>
            ),
            button: '公式LINE',
            hasButton: true,
            buttonColorScheme: 'green',
          },
          {
            title: '③前日の確認連絡',
            content: (
              <>
                <Text fontWeight={600}>
                  前日の夕方を目安に
                  <br />
                  <span style={{ color: 'red' }}>お電話</span>
                  での打ち合わせ。
                </Text>
                <br />
                <Text>（内容）</Text>
                <UnorderedList>
                  <ListItem>時間</ListItem>
                  <ListItem>集合場所</ListItem>
                  <ListItem>ツアーの事前打ち合わせ</ListItem>
                </UnorderedList>
              </>
            ),
            hasButton: false,
          },
          {
            title: '④予約当日',
            content: (
              <VStack textAlign='center'>
                <Box fontWeight={600}>
                  現地集合！
                  <Text>↓</Text>
                  <Text color='red'>オーダーメイドツアー</Text>
                  <Text>↓</Text>
                  <Text>現地解散！</Text>
                  <br />
                  <Text>ありがとうございました。</Text>
                </Box>
              </VStack>
            ),
            hasButton: false,
          },
        ].map((item, i) => (
          <StepCard
            key={`${item.title}-${i}`}
            titleText={item.title}
            content={item.content}
            buttonText={item.button}
            hasButton={item.hasButton}
            buttonColorScheme={item.buttonColorScheme}
          />
        ))}
      </Flex>
    </VStack>
  );
};
