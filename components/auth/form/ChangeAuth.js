import { Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Link as PrimaryLink } from '@chakra-ui/react';

function ChangeAuth({ login }) {
  const text = login ? `Don't have an account?` : `Already have an account?`;
  const href = login ? '/signup' : '/login';
  const linkText = login ? 'Sign Up' : 'Login';
  return (
    <Stack isInline spacing='1' mt='4' justify='center'>
      <Text>{text}</Text>
      <Link href={href}>
        <PrimaryLink color='blue.500'>{linkText}</PrimaryLink>
      </Link>
    </Stack>
  );
}

export default ChangeAuth;
