import { VStack, Heading, Text, Grid } from '@chakra-ui/react';
import { StepCard } from '@/components/organisms/StepCard';

export const HomeReservation: React.FC = () => {
  return (
    <VStack w='full'>
      <Heading fontSize='3xl'>Reservation</Heading>
      <Text fontSize='4xl'>予約方法</Text>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }}
        w='full'
        gap='1.5rem'
      >
        {[
          {
            id: 1,
            title: '予約情報の入力',
            content: (
              <Text>
                ボタン押下で公式LINEが開きます。
                <br />
                予約日のご選択、お客様情報のご入力をお願いいたします。
              </Text>
            ),
            button: '予約する',
            hasButton: true,
            hasNext: true,
          },
          {
            id: 2,
            title: '仮予約完了',
            content: (
              <Text>
                情報を入力後はまだ仮予約の状態です。
                <br />
                スタッフが予約当日の天気、予約状況を確認でき次第、メッセージをお送りします。
              </Text>
            ),
            hasButton: false,
            hasNext: true,
          },
          {
            id: 3,
            title: '本予約完了',
            content: (
              <Text>
                スタッフから本予約完了のご連絡をお送りします。
                <br />
                ツアー時間、当日の天気、注意事項をお伝えします。
              </Text>
            ),
            hasButton: false,
            hasNext: true,
          },
          {
            id: 4,
            title: '予約当日',
            content: (
              <Text>
                予約当日は予約時間に合わせてお越しください。
                <br />
                緊急の連絡等は電話で直接お願いいたします。
              </Text>
            ),
            hasButton: false,
            hasNext: false,
          },
        ].map((item, i) => (
          <StepCard
            key={`${item.id}-${i}`}
            stepNum={item.id}
            titleText={item.title}
            content={item.content}
            buttonText={item.button}
            hasButton={item.hasButton}
          />
        ))}
      </Grid>
    </VStack>
  );
};
