import { Button, VStack, Text, Box, Flex, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Reservation: React.FC = () => {
  return (
    <VStack>
      <Text
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        予約・お問い合わせ
      </Text>

      <Box p='2rem'>
        <Text
          wordBreak='keep-all'
          overflowWrap='anywhere'
          textAlign='center'
          fontSize={{ base: 'lg', lg: 'xl' }}
          fontWeight='bold'
          textDecoration='underline'
          textDecorationThickness='0.5rem'
          textDecorationColor='red'
          textUnderlineOffset='-0.2rem'
          sx={{ textDecorationSkipInk: 'none' }}
        >
          予約・お問合せは公式LINEからお願いします。
          <br />
          予約の前に予約状況を確認して
          <wbr />
          連絡していただけますと、
          <br />
          予約がスムーズになるため大変助かります。
        </Text>

        <Flex
          justify='space-between'
          gap='3rem'
          flexDir={{ base: 'column', md: 'row' }}
          mt='2rem'
        >
          <Flex
            flexDir='column'
            justifyContent='flex-start'
            alignItems='center'
            gap='1.5rem'
          >
            <Link as={NextLink} href={process.env.NEXT_PUBLIC_TIMETREE}>
              <Button colorScheme='linkedin' size='lg' w='160px'>
                予約状況
              </Button>
            </Link>

            <Image
              src='contact/reservation_status.jpg'
              alt='contact/reservation_status'
              w={{ base: '250px', md: '300px', lg: '400px' }}
            />
          </Flex>

          <Flex
            flexDir='column'
            justifyContent='flex-start'
            alignItems='center'
            gap='1.5rem'
          >
            <Link as={NextLink} href={process.env.NEXT_PUBLIC_LINE}>
              <Button colorScheme='whatsapp' size='lg' w='160px'>
                公式LINE
              </Button>
            </Link>
            <Image
              src='contact/line_1.jpg'
              alt='contact/line_1'
              w={{ base: '90%', md: '300px', lg: '400px' }}
              objectFit='cover'
            />
            <Image
              src='contact/line_2.jpg'
              alt='contact/line_2'
              w={{ base: '90%', md: '300px', lg: '400px' }}
              objectFit='cover'
            />
          </Flex>
        </Flex>
      </Box>
    </VStack>
  );
};
