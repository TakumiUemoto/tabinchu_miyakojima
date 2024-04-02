import { Button, VStack, Text, Box } from '@chakra-ui/react';

export const CancelPolicy: React.FC = () => {
  return (
    <VStack>
      <Text
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        キャンセルポリシー
      </Text>

      <Box p='2rem'>
        <Button colorScheme='gray' size='lg' w='240px'>
          キャンセルポリシー
        </Button>
      </Box>
    </VStack>
  );
};
