import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

function NavLink({ path, text, hoverable, as }) {
  return (
    <Link href={`/${path}`} as={as}>
      <ChakraLink
        _hover={{
          textDecoration: 'none',
          color: hoverable && 'green.500',
        }}
        href={`/${as}`}
      >
        {text}
      </ChakraLink>
    </Link>
  );
}

export default NavLink;
