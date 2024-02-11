import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

type PlanCardProps = {
  imagePath: string;
  headingText: string;
  contentText: string;
  buttonText: string;
};

export const PlanCard: React.FC<PlanCardProps> = ({
  imagePath,
  headingText,
  contentText,
  buttonText,
}) => {
  return (
    <Card overflow='hidden' variant='outline'>
      <Flex
        justify='center'
        align='center'
        backgroundImage={imagePath}
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        w='80dvw'
        minH='350px'
      >
        <VStack justify='center' align='center'>
          <CardBody textAlign='center'>
            <Heading size='lg'>{headingText}</Heading>
            <Text>{contentText}</Text>
          </CardBody>
          <CardFooter display='flex' justify='center'>
            <Button colorScheme='teal'>{buttonText}</Button>
          </CardFooter>
        </VStack>
      </Flex>
    </Card>
  );
};
