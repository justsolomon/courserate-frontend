import { Button, Icon, Text, VStack } from '@chakra-ui/react';
import { MdCloudOff } from 'react-icons/md';
import { FaRedo } from 'react-icons/fa';

function NetworkError({ refetchQuery }) {
  return (
    <VStack
      w='100%'
      spacing='4'
      px={['4', '0']}
      textAlign='center'
      fontSize={['15px', 'md']}
    >
      <Icon as={MdCloudOff} boxSize='36px' color='gray.500' />
      <Text>
        Looks like you lost your connection. Please check it and try again.
      </Text>
      <Button
        leftIcon={<Icon as={FaRedo} />}
        color='white'
        bg='green.400'
        colorScheme='green'
        borderColor='green.400'
        _hover={{ bg: 'green.500' }}
        borderRadius='full'
        fontSize={['15px', 'md']}
        onClick={refetchQuery}
      >
        Try again
      </Button>
    </VStack>
  );
}

export default NetworkError;
