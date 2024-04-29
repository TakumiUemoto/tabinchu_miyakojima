import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { PhotoSlider } from '@/components/organisms/PhotoSlider';
import ExportedImage from 'next-image-export-optimizer';

const photos = [
  { src: 'photo_gallery/1.jpg', alt: '1' },
  { src: 'photo_gallery/2.jpg', alt: '2' },
  { src: 'photo_gallery/3.jpg', alt: '3' },
  { src: 'photo_gallery/4.jpg', alt: '4' },
  { src: 'photo_gallery/5.jpg', alt: '5' },
  { src: 'photo_gallery/6.jpg', alt: '6' },
  { src: 'photo_gallery/7.jpg', alt: '7' },
  { src: 'photo_gallery/8.jpg', alt: '8' },
  { src: 'photo_gallery/9.jpg', alt: '9' },
];

export const HomePhotoGallery: React.FC = () => {
  const row1 = photos.slice(0, 3);
  const row2 = photos.slice(3, 6);
  const row3 = photos.slice(6, 9);

  const [isSlider, setIsSlider] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 900) {
        return setIsSlider(true);
      }
      return setIsSlider(false);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box id='photo'>
      {isSlider ? (
        <Box mx='0.5rem'>
          <PhotoSlider>
            {photos.map((photo) => (
              <div key={photo.alt} style={{ width: '100%' }}>
                <ExportedImage
                  src={photo.src}
                  alt={photo.alt}
                  width={300}
                  height={400}
                />
              </div>
            ))}
          </PhotoSlider>
        </Box>
      ) : (
        <Flex flexDir='column' gap='1rem'>
          <Flex
            flexDir='row'
            flexWrap='wrap'
            gap='1rem'
            justify='center'
            w={{ base: '95dvw', md: '100dvw' }}
          >
            {row1.map((photo) => (
              <ExportedImage
                key={photo.alt}
                src={photo.src}
                alt={photo.alt}
                width={photo.alt === '3' ? 400 : 200}
                height={350}
              />
            ))}
          </Flex>

          <Flex
            flexDir='row'
            flexWrap='wrap'
            gap='1rem'
            justify='center'
            w={{ base: '95dvw', md: '100dvw' }}
          >
            {row2.map((photo) => (
              <ExportedImage
                key={photo.alt}
                src={photo.src}
                alt={photo.alt}
                width={photo.alt === '4' ? 400 : 200}
                height={350}
              />
            ))}
          </Flex>

          <Flex
            flexDir='row'
            flexWrap='wrap'
            gap='1rem'
            justify='center'
            w={{ base: '95dvw', md: '100dvw' }}
          >
            {row3.map((photo) => (
              <ExportedImage
                key={photo.alt}
                src={photo.src}
                alt={photo.alt}
                width={photo.alt === '9' ? 400 : 200}
                height={350}
              />
            ))}
          </Flex>
        </Flex>
      )}
    </Box>
  );
};
export default HomePhotoGallery;
