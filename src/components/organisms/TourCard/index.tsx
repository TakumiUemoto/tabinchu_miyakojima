import {
  Button,
  Card,
  CardBody,
  Divider,
  Stack,
  VStack,
  CardProps,
  ButtonProps,
  Link,
} from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';

import NextLink from 'next/link';

type TourCardProps = Omit<CardProps, 'content'> & {
  variant: 'summary' | 'detail';
  imagePath: string;
  heading: React.ReactNode;
  content: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  buttonColorScheme?: ButtonProps['colorScheme'];
};

export const TourCard: React.FC<TourCardProps> = ({
  variant,
  imagePath,
  heading,
  content,
  buttonText,
  buttonLink,
  buttonColorScheme = 'gray',
  ...rest
}) => {
  return (
    <Card overflow='hidden' variant='outline' w='full' {...rest}>
      {variant === 'summary' ? (
        <VStack
          justify='space-evenly'
          align='center'
          w='full'
          h='full'
          px='0.5rem'
          backgroundImage={`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${imagePath})`}
          backgroundSize='cover'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          color='#fff'
          minH={{ base: 400, md: 500 }}
        >
          <VStack display='flex' gap='2rem' my='2rem'>
            {heading}
            {content}
          </VStack>

          <Link as={NextLink} href={buttonLink}>
            <Button
              colorScheme={buttonColorScheme}
              size='lg'
              w={{ base: '250px' }}
            >
              {buttonText}
            </Button>
          </Link>
        </VStack>
      ) : (
        <>
          <CardBody borderRadius='2rem'>
            <ExportedImage
              src={imagePath}
              alt='tour_image'
              width={400}
              height={300}
            />
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
