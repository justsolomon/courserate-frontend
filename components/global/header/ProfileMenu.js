import { useMutation } from '@apollo/client';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { accessToken, profile } from '../../../graphql/state/authState';
import { updateStorageStatus } from '../../auth/actions/authActions';
import LOGOUT_USER from './logoutMutation';
import MenuItem from './MenuItem';

function ProfileMenu() {
  const router = useRouter();

  const [logout] = useMutation(LOGOUT_USER, {
    onCompleted(data) {
      console.log('logout', data);
      router.push('/');
    },
    onError({ message }) {
      console.log('logout error', message);
    },
  });

  const { username } = profile();

  console.log(profile());
  return (
    <Menu closeOnBlur={true}>
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
        <Box as='span'>{username}</Box>
      </MenuButton>
      <MenuList borderRadius='base'>
        <MenuItem text='View Profile' />
        <MenuItem text='Add Course' />
        <MenuDivider />
        <MenuItem
          clickAction={() => {
            logout();
            updateStorageStatus(false);
            accessToken('');
          }}
          text='Logout'
        />
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
