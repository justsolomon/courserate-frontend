import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

function BlueLink({ href, linkText }) {
  return (
    <Link href={href}>
      <ChakraLink color='blue.500' href={href}>
        {linkText}
      </ChakraLink>
    </Link>
  );
}

export default BlueLink;
