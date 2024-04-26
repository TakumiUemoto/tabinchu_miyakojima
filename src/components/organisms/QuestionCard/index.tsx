import { Card, Text } from '@chakra-ui/react';

type QuestionCardProps = {
  questionText: string;
  answerText: string;
};

export const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const { questionText, answerText } = props;
  return (
    <Card w='full' minH='5rem' p='1.5rem 2rem'>
      <Text
        fontSize='xl'
        fontWeight='bold'
        mb='0.5rem'
      >{`Q.${questionText}`}</Text>
      <Text fontSize='sm'>{answerText}</Text>
    </Card>
  );
};
