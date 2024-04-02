import { Button, VStack, Text, Box } from '@chakra-ui/react';
export const TeamsOfUse: React.FC = () => {
  return (
    <VStack>
      <Text
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        mb='1rem'
        fontWeight='bold'
      >
        利用規約
      </Text>

      <Box p='2rem'>
        <Button colorScheme='gray' size='lg' w='160px'>
          利用規約
        </Button>
      </Box>
    </VStack>
  );
};
