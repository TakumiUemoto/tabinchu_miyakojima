import { Card, CardProps, Center } from '@chakra-ui/react';

type ImageCardProps = CardProps & {
  imagePath: string;
  children: React.ReactNode;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  imagePath,
  children,
  ...rest
}) => {
  return (
    <Card
      overflow='hidden'
      variant='outline'
      w='full'
      borderRadius='1.5rem'
      {...rest}
    >
      <Center
        backgroundImage={`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${imagePath})`}
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        minH='400px'
      >
        {children}
      </Center>
    </Card>
  );
};
