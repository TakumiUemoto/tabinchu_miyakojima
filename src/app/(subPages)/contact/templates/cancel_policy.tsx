import { VStack, Text, Box } from '@chakra-ui/react';

export const CancelPolicy: React.FC = () => {
  return (
    <VStack id='cancel_policy'>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        キャンセルポリシー
      </Text>

      <Box p='2rem'>
        <Text
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          fontSize={{ base: 'lg', lg: 'xl' }}
          fontWeight='bold'
          border='2px solid black'
        >
          7日前～3日前 総額の50%
          <br />
          2日前〜1日前 総額の70%
          <br />
          当日（前日19:00～当日）総額の100%
        </Text>
        <Text
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='left'
          fontSize={{ base: 'md' }}
          textDecoration='underline wavy'
          textDecorationThickness='0.05rem'
          textDecorationColor='red'
          pt='1.5rem'
        >
          ※ポイント変更により、安全にツアーを催行できる場合のキャンセルや、
          <br />
          お客様の体調不良などお客様のご都合によるキャンセルも、
          キャンセルポリシーの対象となります。
        </Text>
        <Text
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='left'
          fontSize={{ base: 'md' }}
        >
          ※飲酒した状態でのツアーのご参加はできません。
          <br />
          飲酒されてお越しの場合キャンセルポリシーの対象となります。
          <br />
          ※台風時のキャンセルは、
          <wbr />
          搭乗予定の便が欠航が決定してからの無償対応になります。
        </Text>
      </Box>
    </VStack>
  );
};
