import {
  Box,
  Button,
  Card,
  CardHeader,
  Heading,
  VStack,
} from '@chakra-ui/react';

type StepCardProps = {
  titleText: string;
  content: React.ReactNode;
  buttonText?: string;
  hasButton: boolean;
};

export const StepCard: React.FC<StepCardProps> = (props) => {
  const { titleText, content, hasButton, buttonText } = props;
  return (
    <Card
      w='400px'
      pb='1rem'
      borderRadius='1rem'
      bgColor='rgba(239, 239, 239, 0.25)'
    >
      <CardHeader
        bgColor='#000'
        opacity={0.8}
        p='1rem'
        borderRadius='1rem 1rem 0 0'
      >
        <Heading
          color='white'
          fontSize={{ base: 'xl', md: '2xl' }}
          textAlign='center'
        >
          {titleText}
        </Heading>
      </CardHeader>

      <VStack minH='240px' justify='space-between' px='1rem'>
        <Box mt='1rem'>{content}</Box>
        {hasButton && (
          <Button colorScheme='blackAlpha' size='md' w='full'>
            {buttonText}
          </Button>
        )}
      </VStack>
    </Card>
  );
};
