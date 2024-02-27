import { Button, Card, Flex, VStack } from '@chakra-ui/react';

type PlanCardProps = {
  imagePath: string;
  heading: React.ReactNode;
  content: React.ReactNode;
  buttonText: string;
};

export const PlanCard: React.FC<PlanCardProps> = ({
  imagePath,
  heading,
  content,
  buttonText,
}) => {
  return (
    <Card overflow='hidden' variant='outline' w='full'>
      <Flex
        justify='center'
        align='center'
        backgroundImage={`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${imagePath})`}
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        color='#fff'
        minH='300px'
      >
        <VStack
          justify='center'
          align='center'
          w='full'
          px='1rem'
          py={{ base: '4rem', md: '3rem', lg: '2rem' }}
        >
          {heading}
          {content}
          <Button
            colorScheme='whiteAlpha'
            w={{ base: 'full', md: '75%', lg: '50%' }}
          >
            {buttonText}
          </Button>
        </VStack>
      </Flex>
    </Card>
  );
};
