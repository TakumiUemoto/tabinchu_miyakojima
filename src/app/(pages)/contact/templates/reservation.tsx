import { Button, VStack, Text, Box } from '@chakra-ui/react';

export const Reservation: React.FC = () => {
  return (
    <VStack>
      <Text
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        予約・お問い合わせ
      </Text>

      <Box p='2rem'>
        <Button colorScheme='whatsapp' size='lg' w='160px'>
          公式LINE
        </Button>
      </Box>
    </VStack>
  );
};
