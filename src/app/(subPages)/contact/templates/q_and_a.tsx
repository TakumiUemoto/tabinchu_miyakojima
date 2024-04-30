import { Box, Flex, Text, VStack } from '@chakra-ui/react';

type QandAProps = {
  title: string;
  children: React.ReactNode;
};

const Template: React.FC<QandAProps> = ({ title, children }) => {
  return (
    <Flex flexDir='column'>
      <Text
        fontSize='xl'
        color='rgba(36, 95, 167, 1)'
        fontWeight='bold'
      >{`Q. ${title}`}</Text>
      <Box fontWeight='bold'>{children}</Box>
    </Flex>
  );
};

export const QandA: React.FC = () => {
  return (
    // NOTE: ヘッダーの高さ関連のリファクタ要？
    <VStack id='q_and_a' pt='6rem' px={{ base: '0.5rem', md: '0rem' }}>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        Q & A
      </Text>

      <Flex
        flexDir='column'
        gap='1.5rem'
        py={{ base: '4rem' }}
        px={{ base: '2rem', md: '4rem' }}
        bgColor='rgba(214,230,245,0.5)'
        borderRadius='5rem'
      >
        <Template title='ツアーの集合場所はどこですか？'>
          <Box>
            <Text>
              集合場所や時間については前日までにお電話もしくはLINEなどでご連絡差し上げます。
            </Text>
            <Text>
              なお、当日の海況や天候により安全面を考慮して、ツアーを実施する場所（ポイント）を変更する可能性がございます。
            </Text>
            <Text>
              その際はツアー直前に集合時間・場所を変更する場合もございますので、あらかじめご了承ください。
            </Text>
          </Box>
        </Template>

        <Template title='集合場所まではどうやって行けばいいですか？'>
          <Box>
            <Text>
              基本、現地集合・現地解散となっており、レンタカーを借りて集合場所に来ていただく形となっております。
            </Text>
            <Text>
              車の手配がどうしてもできない場合は公式LINEか電話にてご相談ください!
            </Text>
          </Box>
        </Template>

        <Template title='写真はツアー料金に含まれていますか？'>
          <Box>
            <Text>はい、写真代はツアー料金に含まれております。</Text>
            <Text>ツアー後の清算の際に写真をお渡しします。</Text>
            <Text>
              iPhoneの方はAir
              DropでAndroidの方はギガファイル便で当日中にはお送りいたします。
            </Text>
            <Text>
              追加料金にはなりますが、カメラマンヒロキによる、写真編集（レタッチ）を2,000円で承っています。クオリティが上がりますので是非!
            </Text>
            <Text>詳細につきましてはツアー当日にご質問ください。</Text>
          </Box>
        </Template>

        <Template title='子供は何歳から参加できますか？​'>
          <Box>
            <Text>シュノーケル：５歳以上から</Text>
            <Text>
              小さいお子様に関しては水中が見える浮き輪をご用意し、スタッフを一人常時配置いたします。
            </Text>
            <br />
            <Text>スキンダイビング / SUP: 12歳以上から</Text>
            <Text>
              SUPに関しては12歳未満の方は、スタッフもしくは保護者の方のボートに一緒に乗る形でツアーに参加していただけます。
            </Text>
          </Box>
        </Template>

        <Template title='1人でも貸切になりますか？'>
          <Box>
            <Text>
              はい、お一人様でも貸切オーダーメイドツアーの提供は可能です。
            </Text>
          </Box>
        </Template>

        <Template title='泳げないのですが、参加は可能ですか？​'>
          <Box>
            <Text>はい、ツアーの参加は可能 です。</Text>
            <Text>
              ライフジャケットを着用するシュノーケルをオススメいたします!
            </Text>
            <Text>
              浮力を確保しながら泳ぐので、泳ぎやすく呼吸もしやすいです。
            </Text>
            <Text>
              顔に水をつけるのも抵抗がある方は、SUPをオススメいたします!
            </Text>
          </Box>
        </Template>

        <Template title='スキンダイビングは初めてでもできますか？'>
          <Box>
            <Text>
              もちろん可能です。泳ぐ前にレクチャーの時間を設けておりますので、初めての方でも丁寧に指導させていただきます。
            </Text>
            <Text>
              また、ツアー中は浮き具を携行しておりますので、途中で疲れてしまった場合でも浮き具に掴まることで休憩ができますのでご安心ください。
            </Text>
          </Box>
        </Template>

        <Template title='シャワーはありますか？​'>
          <Box>
            <Text>簡易的なシャワーですが、ご用意しています。</Text>
            <Text>
              お着替えの前に海水を洗い流す形です。シャンプーなどはございません。
            </Text>
            <Text>
              Instagramのハイライトにシャワーの動画があるのでご覧になっていただけるとイメージがつきやすいかと思います。
            </Text>
          </Box>
        </Template>

        <Template title='ツアー参加するにあたっての制限はありますか？'>
          <Box>
            <Text>詳しくは利用規約をご確認ください。</Text>
          </Box>
        </Template>

        <Template title='雨天でもツアーは開催されますか？'>
          <Box>
            <Text>
              雨天の場合でも海況が荒れていなければツアーは開催いたします。
            </Text>
            <Text>
              雨が降っている場合でも、海の透明度や美しさは変わりありませんのでご安心ください。
            </Text>
            <Text>
              ただし、強風や雷、高波の場合はガイドの判断により中止させていただく場合がございます。
            </Text>
            <Text>天候に左右される旨、あらかじめご了承ください。</Text>
          </Box>
        </Template>

        <Template title='当日何を持っていけばよいですか？​'>
          <Box>
            <Text>
              タオル・着替え・飲み物・ツアー代金があれば問題ございません。
            </Text>
            <Text>
              着替えの際、テントも準備していますので、ご利用の際は事前にお声がけください。
            </Text>
          </Box>
        </Template>

        <Template title='支払い方法は何がありますか？'>
          <Box>
            <Text>現金 でのお支払いとなっております。</Text>
            <Text>ツアー当日までに現金のご用意をお願いいたします。</Text>
            <Text>現金での支払いが難しい場合はご相談ください。</Text>
          </Box>
        </Template>

        <Text
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontWeight='bold'
          pt='1rem'
        >
          他に不明な点がございましたら
          <wbr />
          公式LINEにお問合せください!
        </Text>
      </Flex>
    </VStack>
  );
};
