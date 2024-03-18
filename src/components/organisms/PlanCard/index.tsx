import {
  Button,
  Card,
  CardBody,
  Divider,
  Stack,
  VStack,
  Image,
  CardProps,
} from '@chakra-ui/react';

type PlanCardProps = Omit<CardProps, 'content'> & {
  variant: 'summary' | 'detail';
  imagePath: string;
  heading: React.ReactNode;
  content: React.ReactNode;
  buttonText?: string;
};

export const PlanCard: React.FC<PlanCardProps> = ({
  variant,
  imagePath,
  heading,
  content,
  buttonText,
  ...rest
}) => {
  return (
    <Card overflow='hidden' variant='outline' w='full' {...rest}>
      {variant === 'summary' ? (
        <VStack
          justify='center'
          align='center'
          w='full'
          h='full'
          px='3rem'
          backgroundImage={`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${imagePath})`}
          backgroundSize='cover'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          color='#fff'
          minH={{ base: 400, md: 500 }}
        >
          <VStack my='3rem'>
            {heading}
            {content}
          </VStack>

          <Button
            colorScheme='whiteAlpha'
            w={{ base: '75%', md: '50%', lg: '25%' }}
          >
            {buttonText}
          </Button>
        </VStack>
      ) : (
        <>
          <CardBody>
            <Image src={imagePath} borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              {heading}
              {content}
            </Stack>
          </CardBody>
          <Divider />
        </>
      )}
    </Card>
  );
};
