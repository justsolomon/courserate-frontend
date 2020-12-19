import { VStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function UserError({ error }) {
  const [errorMsg, setErrorMsg] = useState('');
  const [errorType, setErrorType] = useState('');

  useEffect(() => {
    if (error === 'Error: User not found') {
      setErrorMsg(`This user doesn't exist`);
      setErrorType('Not Found');
    } else setErrorMsg(error);
  }, [error]);

  return (
    <VStack
      align={['center', 'flex-start']}
      borderTopWidth={['1px', '0']}
      p={['4', '0']}
      w={['100%', 'unset']}
      textAlign={['center', 'left']}
    >
      <Text fontWeight='medium' fontSize={['17px', 'xl']}>
        {errorMsg}
      </Text>
      {errorType === 'Not Found' && (
        <Text fontSize={['15px', 'md']}>
          Check if the username is correct or try searching for another.
        </Text>
      )}
    </VStack>
  );
}

export default UserError;
