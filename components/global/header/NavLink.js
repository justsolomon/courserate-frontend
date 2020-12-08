import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

function NavLink({ path, text, hoverable }) {
  return (
    <Link href={`/${path}`}>
      <ChakraLink
        _hover={{
          textDecoration: 'none',
          color: hoverable && 'green.500',
        }}
        href={`/${path}`}
      >
        {text}
      </ChakraLink>
    </Link>
  );
}

export default NavLink;
