import { ChevronRightIcon } from '@chakra-ui/icons';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

type StepCardProps = {
  stepNum: number;
  titleText: string;
  contentText: string;
  buttonText?: string;
  hasButton: boolean;
  hasNext: boolean;
};

export const StepCard: React.FC<StepCardProps> = (props) => {
  const { stepNum, titleText, contentText, hasButton, buttonText, hasNext } =
    props;
  return (
    <Flex align='center'>
      <Card minH='40dvh' w='16.5dvw'>
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

        <CardBody>
          <Heading fontSize='xl'>{titleText}</Heading>
          <Text fontSize='sm' pt='0.5rem'>
            {contentText}
          </Text>
        </CardBody>

        {hasButton && (
          <CardFooter display='flex' justify='center'>
            <Button size='md' w='full'>
              {buttonText}
            </Button>
          </CardFooter>
        )}
      </Card>

      {hasNext && <ChevronRightIcon fontSize='4xl' mx='0.5rem' />}
    </Flex>
  );
};
