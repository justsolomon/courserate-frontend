import Link from 'next/link';
import { Link as PrimaryLink } from '@chakra-ui/core';

function NavLink({ path, text, login }) {
  return (
    <Link href={`/${path}`}>
      <PrimaryLink
        _hover={{
          textDecoration: 'none',
          color: login && 'green.500',
        }}
      >
        {text}
      </PrimaryLink>
    </Link>
  );
}

export default NavLink;
