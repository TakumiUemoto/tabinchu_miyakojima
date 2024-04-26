import { Flex, Text, VStack } from '@chakra-ui/react';

export const TeamsOfServices: React.FC = () => {
  return (
    <VStack>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        fontWeight='bold'
        mb='1rem'
      >
        利用規約
      </Text>

      <Flex
        flexDir='column'
        gap='1.5rem'
        w={{ base: '90%', md: '70%' }}
        px={{ base: '1.5rem', md: '4rem', lg: '6rem' }}
      >
        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ①心臓に持病のある方、てんかんや意識喪失など起こしたことのある方、
          妊娠中の方、飲酒及び酒気帯びの方、薬物使用の方、体調不良の方、怪我をされている方は参加できません。
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ②貴重品の紛失や携帯電話、カメラなどの貴重品の管理は自己責任でお願いいたします。
          <br />
          万一の水没や紛失については一切責任を負いません。
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ③急な天候悪化、海況の変化、スタッフの指示従わない場合やゲストの重大な疾病がツアー中に判明した場合にツアー開催中でもあっても中断または中止にする場合がございます。
          <br />
          その際にツアー料金の払い戻しはありません。
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ④たびんちゅの所有する器材（フィン、マスク、シュノーケルなど）のレンタルを受ける際に、正しい使用方法に基づいて器材の取り扱いを行います。
          <br />
          それ以外での使用方法のレンタル中の器材の破損、紛失、盗難に際しては速やかに弁償することに同意いたします。
        </Text>

        <Text
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='left'
          fontSize={{ base: 'md' }}
        >
          ⑤ツアー参加に際して、ガイドの指示に従わずに発生する事故あるいは不測の事態から生じる事故や怪我については自身で責任を負うとともに、健康管理など細心の注意を払って参加します。
          <br />
          また、自身でも危険を避ける努力を怠らずに、ツアーに参加することに同意します。
          <br />
          <br />
          ※私は上記の内容をよく読み、確認して署名いたします。
        </Text>
      </Flex>
    </VStack>
  );
};
