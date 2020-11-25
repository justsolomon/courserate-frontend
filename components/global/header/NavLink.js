import Link from 'next/link';
import { Link as PrimaryLink } from '@chakra-ui/react';

function NavLink({ path, text, hoverable }) {
  return (
    <Link href={`/${path}`}>
      <PrimaryLink
        _hover={{
          textDecoration: 'none',
          color: hoverable && 'green.500',
        }}
        href={`/${path}`}
      >
        {text}
      </PrimaryLink>
    </Link>
  );
}

export default NavLink;
