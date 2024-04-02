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
    <VStack>
      <Text
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        Q & A
      </Text>

      <Flex flexDir='column' gap='1.5rem' px='1rem'>
        <Template title='当日何を持っていけばよいですか？​'>
          <Box>
            <Text>
              タオル・着替え・飲み物・ツアー代金があれば問題ございません。
            </Text>
            <Text>
              着替えの際テントをご用意しておりますが、ポンチョなどがあればよりスムーズに着替えられると思われます。
            </Text>
          </Box>
        </Template>

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

        <Template title='ツアー参加するにあたっての制限はありますか？'>
          <Box>
            <Text>
              詳しくは利用規約をご確認ください。ページの下にリンクがございます。
            </Text>
            <Text>年齢制限：</Text>
            <Text>重大な疾患：</Text>
          </Box>
        </Template>

        <Template title='1人でも貸切になりますか？'>
          <Box>
            <Text>はい、お一人様でも貸切オーダーメイドツアーとなります。</Text>
            <Text>
              しかし、お一人様での参加ですと追加料金をいただいております。
            </Text>
            <Text>ご了承の程、よろしくお願いします。</Text>
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
      </Flex>
    </VStack>
  );
};
