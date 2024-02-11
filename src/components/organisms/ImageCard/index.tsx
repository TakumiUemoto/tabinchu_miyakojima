import { Card, Center } from '@chakra-ui/react';

type ImageCardProps = {
  imagePath: string;
  children: React.ReactNode;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  imagePath,
  children,
}) => {
  return (
    <Card overflow='hidden' variant='outline'>
      <Center
        backgroundImage={imagePath}
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        w='80dvw'
        minH='400px'
      >
        {children}
      </Center>
    </Card>
  );
};
