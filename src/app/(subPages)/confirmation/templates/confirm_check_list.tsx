import { VStack, Text, Box, ListItem, UnorderedList } from '@chakra-ui/react';

export const ConfirmCheckList: React.FC = () => {
  return (
    <VStack id='confirm_check_list'>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        fontWeight='bold'
        textAlign='center'
        mb='1rem'
      >
        スキンダイビング・スノーケル
        <br />
        病歴確認書 / 健康チェック
      </Text>

      <Box
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        gap='2rem'
        width={{ base: '90%', md: '70%', lg: '60%' }}
      >
        <Text
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          fontSize={{ base: 'md', lg: 'lg' }}
          p={{ base: '0.5rem', md: '1rem' }}
          border='2px solid black'
        >
          マリンスポーツはルールを守ってご参加する場合は安全なアクティビティですが、特定の病気や過去に重大な疾患がある方には非常に危険な事態を招く可能性があります。
          この確認表はツアー参加前に、ツアー中に安全性を阻害させる要因があるかの判断を行い、ツアーガイドとゲストとの双方でツアーへの参加可否を確認するためのものです。
          この確認作業はゲストのツアーへの参加を必ずしもお断りするためのものではありません。
          決して自己判断せず、確認項目に一つでも当てはまる場合は、必ず事前にご連絡下さい。
        </Text>

        <Text
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          mb='1rem'
          fontWeight='bold'
          textAlign='center'
        >
          ▽チェックリスト▽
        </Text>

        <UnorderedList width='fit-content' fontSize={{ base: 'md' }}>
          <ListItem>
            てんかん、ぜんそく、痙攣など発作が出る病気の罹患歴はありますか?
          </ListItem>
          <ListItem>
            心臓病、脳梗塞、動脈硬化など循環器系の病気の罹患歴はありますか?
          </ListItem>
          <ListItem>
            現在、三半規管、耳、副鼻腔等などの病気に罹患していますか?
          </ListItem>
          <ListItem>
            高血圧、高コレステロール、糖尿病等の生活習慣病の診断を受けていますか?
          </ListItem>
          <ListItem>
            精神病、不安障害、行動障害等の問題がある、またはなったことがありますか?
          </ListItem>
          <ListItem>
            現在処方せんによる投薬を受けていますか(避妊薬、マラリア予防薬は除く)
          </ListItem>
          <ListItem>
            妊娠中または妊娠している可能性はありますか?(女性のみ)
          </ListItem>
          <ListItem>
            現在、風邪の症状もしくは体調に不安を感じていますか?
          </ListItem>
          <ListItem>
            ツアー参加当日に飲酒されている。また、激しい二日酔いはありますか?
          </ListItem>
        </UnorderedList>

        <Text
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          fontSize={{ base: 'md', md: 'lg' }}
          textDecoration='underline'
          fontWeight='bold'
        >
          主治医からマリンアクティビティ参加の許可が下りていない方はご参加をお断りしています。
          <br />
          ただし、該当項目があった場合でも、許可が下りている場合に限り自己責任でご参加頂けます。
          <br />
          なお、事故が発生した後に虚偽の申告が判明、且つそのトラブルの原因がゲスト自身の
          疾病によるものであった場合には、当ショップでは一切責任を負わないものとします。
        </Text>
      </Box>
    </VStack>
  );
};
