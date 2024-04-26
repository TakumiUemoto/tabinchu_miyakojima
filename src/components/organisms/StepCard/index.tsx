import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardHeader,
  Heading,
  Link,
  VStack,
} from '@chakra-ui/react';

import NextLink from 'next/link';

export type StepCardProps = {
  titleText: string;
  content: React.ReactNode;
  buttonText?: string;
  buttonColorScheme?: ButtonProps['colorScheme'];
  link: 'time_tree' | 'line' | 'none';
};

export const StepCard: React.FC<StepCardProps> = (props) => {
  const {
    titleText,
    content,
    buttonText,
    buttonColorScheme = 'blackAlpha',
    link,
  } = props;
  return (
    <Card
      w='350px'
      pb='1rem'
      borderRadius='1rem'
      bgColor='rgba(239, 239, 239, 0.25)'
      border='1px solid black'
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
        {link === 'none' && <></>}
        {link === 'line' && (
          <Link as={NextLink} href={process.env.NEXT_PUBLIC_LINE}>
            <Button colorScheme={buttonColorScheme} size='md' w='15rem'>
              {buttonText}
            </Button>
          </Link>
        )}
        {link === 'time_tree' && (
          <Link as={NextLink} href={process.env.NEXT_PUBLIC_TIMETREE}>
            <Button colorScheme={buttonColorScheme} size='md' w='15rem'>
              {buttonText}
            </Button>
          </Link>
        )}
      </VStack>
    </Card>
  );
};
