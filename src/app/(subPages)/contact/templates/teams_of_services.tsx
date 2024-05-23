import { ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';

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

      <UnorderedList
        w={{ base: '90%', md: '70%', lg: '60%' }}
        fontSize={{ base: 'md' }}
      >
        <ListItem>
          心臓に持病のある方、てんかんや意識喪失など起こしたことのある方、妊娠中の方、飲酒及び酒気帯びの方、
          薬物使用の方、体調不良の方、怪我をされている方はツアーに参加をご遠慮させていただいております。
          予約の際に病歴チェックのPDFをお送りしますので、ご確認よろしくお願いします。
        </ListItem>

        <ListItem>
          貴重品の紛失や管理は自己責任でお願いいたします。万一の水没や紛失については一切責任を負いません。
        </ListItem>

        <ListItem>
          急な天候悪化、海況の変化、スタッフの指示従わない場合や未申告の重大な疾病がツアー中に判明した直ちに
          中断または中止にする場合がございます。その際にツアー料金の払い戻しはありません。
        </ListItem>

        <ListItem>
          養殖または畜養中の魚介類の育成を害しないこと。また、海洋生物にはむやみに触らないでください。
        </ListItem>

        <ListItem>
          器材(フィン、マスク、スノーケルなど)のレンタルを受ける際に、正しい使用方法に沿って取り扱いをお願いします。
          それ以外での使用方法でのレンタル器材の破損、紛失、盗難に際しては速やかに弁償をお願いします。
        </ListItem>

        <ListItem>
          ツアー時にはガイドの指示のもと、安全に考慮した行動をとっていただきます。
        </ListItem>

        <ListItem>
          ツアー中は決められたバディシステムのもと単独での遊泳をせず、安全のためガイドの指示に従っていただきます。
        </ListItem>

        <ListItem>
          ツアー中にガイドの指示に従わずに発生した事故、不測の事態から生じる事故ついては自身で責任を負うとともに、自身の健康管理に細心の注意を払ってツアーに参加してください。
        </ListItem>

        <ListItem
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='left'
          fontSize={{ base: 'md' }}
        >
          たびんちゅ 宮古島ではツアー参加時には年齢制限を設けております。
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;シュノーケル：５歳以上〜６５歳未満
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;スキンダイビング / SUP:
          12歳以上 ~ 65歳未満
          <br />
          <br />
          対象年齢から外れる場合は、別途公式LINEにてご相談ください。
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};
