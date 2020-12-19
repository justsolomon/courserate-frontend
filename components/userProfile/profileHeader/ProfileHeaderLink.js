import Link from 'next/link';
import { Divider, Link as ChakraLink, Text } from '@chakra-ui/react';

function ProfileHeaderLink({ link, text, active }) {
  return (
    <Link href={link}>
      <ChakraLink
        w={['50%', , 'unset']}
        href={link}
        fontWeight='medium'
        role='group'
        textAlign='center'
        color={active && 'green.500'}
        _hover={{ textDecoration: 'none', color: 'green.500' }}
      >
        <Text px='4' fontSize={['sm', '15px']}>
          {text}
        </Text>
        <Divider
          mt='0.35rem'
          borderWidth='1px'
          opacity={active ? '1' : '0'}
          _groupHover={{ borderColor: 'green.500' }}
          borderColor={active && 'green.500'}
        />
      </ChakraLink>
    </Link>
  );
}

export default ProfileHeaderLink;
