import { Stack, Text } from '@chakra-ui/react';
import BlueLink from './BlueLink';

function ChangeAuth({ login }) {
  const text = login ? `Don't have an account?` : `Already have an account?`;
  const href = login ? '/signup' : '/login';
  const linkText = login ? 'Sign Up' : 'Login';

  return (
    <Stack isInline spacing='1' mt='4' justify='center'>
      <Text>{text}</Text>
      <BlueLink href={href} linkText={linkText} />
    </Stack>
  );
}

export default ChangeAuth;
