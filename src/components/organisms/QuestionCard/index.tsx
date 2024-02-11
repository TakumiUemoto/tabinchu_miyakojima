import { Card, Heading, Text } from '@chakra-ui/react';

type QuestionCardProps = {
  questionText: string;
  answerText: string;
};

export const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const { questionText, answerText } = props;
  return (
    <Card w='80dvw' minH='5rem' p='1.5rem 2rem'>
      <Heading fontSize='xl' mb='0.5rem'>{`Q.${questionText}`}</Heading>
      <Text fontSize='sm'>{answerText}</Text>
    </Card>
  );
};
