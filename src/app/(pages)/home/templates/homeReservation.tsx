import {
  VStack,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Box,
} from '@chakra-ui/react';
import { StepCard, StepCardProps } from '@/components/organisms/StepCard';

export const HomeReservation: React.FC = () => {
  return (
    <VStack id='reservation' w='full' maxW='6xl'>
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
        w={{ base: 'full', lg: '90%' }}
        flexWrap='wrap'
        gap={{ base: '1rem', md: '3rem' }}
      >
        {[
          {
            title: '①予約情報の確認',
            content: (
              <Text fontSize='xl' fontWeight='bold'>
                Time Tree にて
                <br />
                ご予約状況を確認できます。
                <br />
                <br />
                予約可能であれば、⭕️が表示されます。
              </Text>
            ),
            button: '予約状況',
            buttonColorScheme: 'orange',
            link: 'time_tree',
          },
          {
            title: '②公式LINEから予約',
            content: (
              <>
                <Text
                  fontSize='xl'
                  fontWeight='bold'
                  wordBreak='keep-all'
                  overflowWrap='anywhere'
                >
                  公式LINEから
                  <wbr />
                  予約を受け付けています。
                </Text>
                <br />
                <Text fontSize='lg' fontWeight='bold' color='red'>
                  ※スタッフからの予約確定の
                  <br />
                  連絡を受け予約確定とします。
                </Text>
              </>
            ),
            button: '公式LINE',
            buttonColorScheme: 'whatsapp',
            link: 'line',
          },
          {
            title: '③前日の確認連絡',
            content: (
              <>
                <Text fontSize='xl' fontWeight='bold'>
                  前日の夕方を目安に
                  <br />
                  <span style={{ color: 'red' }}>お電話</span>
                  での打ち合わせ。
                </Text>
                <br />
                <Text>（内容）</Text>
                <UnorderedList fontSize='xl' fontWeight='bold'>
                  <ListItem>時間</ListItem>
                  <ListItem>集合場所</ListItem>
                  <ListItem>ツアーの事前打ち合わせ</ListItem>
                </UnorderedList>
              </>
            ),
            link: 'none',
          },
          {
            title: '④予約当日',
            content: (
              <VStack textAlign='center'>
                <Box fontSize='xl' fontWeight='bold'>
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
            link: 'none',
          },
        ].map((item, i) => (
          <StepCard
            key={`${item.title}-${i}`}
            titleText={item.title}
            content={item.content}
            buttonText={item.button}
            buttonColorScheme={item.buttonColorScheme}
            link={item.link as StepCardProps['link']}
          />
        ))}
      </Flex>
    </VStack>
  );
};
