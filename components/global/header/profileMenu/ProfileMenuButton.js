import { ChevronDownIcon } from '@chakra-ui/icons';
import { MenuButton, Box, Button } from '@chakra-ui/react';

function ProfileMenuButton() {
  return (
    <MenuButton
      as={Button}
      variant='ghost'
      rounded='base'
      width='150px'
      height='40px'
      d='flex'
      justifyContent='space-between'
      alignItems='center'
      px='2'
      borderWidth='1px'
      _focus={{ outline: '0' }}
      rightIcon={<ChevronDownIcon />}
    >
      <Box as='span'>{localStorage['username']}</Box>
    </MenuButton>
  );
}

export default ProfileMenuButton;
