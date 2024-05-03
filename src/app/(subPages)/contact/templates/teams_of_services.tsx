import { Flex, Text, VStack } from '@chakra-ui/react';

export const TeamsOfServices: React.FC = () => {
  return (
    <VStack id='teams_of_services' pt='6rem' pb='4rem'>
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
          ・心臓に持病のある方、てんかんや意識喪失など起こしたことのある方、妊娠中の方、飲酒及び酒気帯びの方、
          薬物使用の方、体調不良の方、怪我をされている方はツアーに参加をご遠慮させていただいております。
          <br />
          予約の際に病歴チェックのPDFをお送りしますので、ご確認よろしくお願いします。
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ・貴重品の紛失や管理は自己責任でお願いいたします。万一の水没や紛失については一切責任を負いません。
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ・急な天候悪化、海況の変化、スタッフの指示従わない場合や未申告の重大な疾病がツアー中に判明した直ちに
          <br />
          中断または中止にする場合がございます。その際にツアー料金の払い戻しはありません。
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ・養殖または畜養中の魚介類の育成を害しないこと。また、海洋生物にはむやみに触らないでください。
          <br />
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ・器材(フィン、マスク、スノーケルなど)のレンタルを受ける際に、正しい使用方法に沿って取り扱いをお願いします。
          <br />
          それ以外での使用方法でのレンタル器材の破損、紛失、盗難に際しては速やかに弁償をお願いします。
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ・ツアー時にはガイドの指示のもと、安全に考慮した行動をとっていただきます。
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ・ツアー中は決められたバディシステムのもと単独での遊泳をせず、安全のためガイドの指示に従っていただきます。
        </Text>

        <Text textAlign='left' fontSize={{ base: 'md' }}>
          ・ツアー中にガイドの指示に従わずに発生した事故、不測の事態から生じる事故ついては自身で責任を負うとともに、自身の健康管理に細心の注意を払ってツアーに参加してください。
        </Text>

        <Text
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='left'
          fontSize={{ base: 'md' }}
        >
          ・たびんちゅ 宮古島ではツアー参加時には年齢制限を設けております。
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;シュノーケル：５歳以上〜６５歳未満
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;スキンダイビング / SUP:
          12歳以上 ~ 65歳未満
          <br />
          <br />
          対象年齢から外れる場合は、別途公式LINEにてご相談ください。
        </Text>
      </Flex>
    </VStack>
  );
};
