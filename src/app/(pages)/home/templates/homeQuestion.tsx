import { QuestionCard } from '@/components/organisms/QuestionCard';
import { VStack, Heading, Text } from '@chakra-ui/react';

export const HomeQuestion: React.FC = () => {
  return (
    <VStack gap='1rem'>
      <Heading fontSize='3xl'>Q&A</Heading>
      <Text fontSize='4xl'>よくあるご質問</Text>

      {[
        {
          question: '泳げないのですが大丈夫でしょうか？',
          answer:
            '参加いただく方は「ウェットスーツ」か「ライフジャケット」、もしくはその両方を着用していただきますので、泳ぎが苦手な方でも問題ありません。これらは「浮力体」と呼ばれ、参加者の体を安全に水面付近に維持する役目を果たします。ですので泳力に関係なく、水面付近より水中世界を散策する事が可能です。',
        },
        {
          question: 'シャワーやメイクをする施設はありますか？',
          answer:
            'ツアーを行う場所によってシャワー施設がない場合がありますが、ツアー後は宿泊先やシャワー施設がある場所まで送迎が可能ですので、遠慮なくお申し付けください。',
        },
        {
          question: '子どももいますが参加できますか？',
          answer:
            'もちろん参加出来ます。小さなお子様でも参加できるように、足入れ型の浮き輪や箱メガネをご用意しています。',
        },
        {
          question: '一人でも参加出来ますか？',
          answer: '1人でも問題ありません。一緒にツアーを楽しみましょう！',
        },
      ].map((question, index) => (
        <QuestionCard
          key={index}
          questionText={question.question}
          answerText={question.answer}
        />
      ))}
    </VStack>
  );
};
