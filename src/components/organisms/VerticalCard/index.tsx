import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

type VerticalCardProps = {
  imagePath: string;
  headingText: string;
  contentText: string;
  buttonText: string;
};

export const VerticalCard: React.FC<VerticalCardProps> = (props) => {
  const { imagePath, headingText, contentText, buttonText } = props;
  return (
    <Card overflow='hidden' variant='outline'>
      <Image
        alt='Show All Tour'
        src={imagePath}
        objectFit='cover'
        w='80dvw'
        minH='300px'
      />
      <VStack>
        <CardBody textAlign='center'>
          <Heading size='lg'>{headingText}</Heading>
          <Text fontSize='sm'>{contentText}</Text>
        </CardBody>
        <CardFooter display='flex' justify='center'>
          <Button colorScheme='teal'>{buttonText}</Button>
        </CardFooter>
      </VStack>
    </Card>
  );
};
