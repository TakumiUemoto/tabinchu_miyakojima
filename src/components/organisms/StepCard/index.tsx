import { Button, Card, CardHeader, Heading, VStack } from '@chakra-ui/react';

type StepCardProps = {
  stepNum: number;
  titleText: string;
  content: React.ReactNode;
  buttonText?: string;
  hasButton: boolean;
};

export const StepCard: React.FC<StepCardProps> = (props) => {
  const { stepNum, titleText, content, hasButton, buttonText } = props;
  return (
    <Card w='full' minH='300px' pb='1rem'>
      <CardHeader
        bgColor='#000'
        opacity={0.8}
        p='0.5rem'
        borderRadius='0.5rem 0.5rem 0 0'
      >
        <Heading
          color='white'
          fontSize='2xl'
          textAlign='center'
        >{`STEP${stepNum}`}</Heading>
      </CardHeader>

      <VStack p='1rem'>
        <Heading
          fontSize='2xl'
          p='1rem'
          textDecoration='underline'
          textUnderlineOffset='0.5rem'
        >
          {titleText}
        </Heading>
        {content}
        {hasButton && (
          <Button size='md' w={{ base: '75%', md: '50%' }}>
            {buttonText}
          </Button>
        )}
      </VStack>
    </Card>
  );
};
