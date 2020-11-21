import { useMutation } from '@apollo/client';
import {
  Menu,
  MenuDivider,
  MenuList,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  accessToken,
  updateStorageStatus,
} from '../../../graphql/state/authState';
import LogoutModal from '../../auth/logout/LogoutModal';
import LOGOUT_USER from './logoutMutation';
import MenuItem from './MenuItem';
import ProfileMenuButton from './ProfileMenuButton';

function ProfileMenu() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [logout, { loading }] = useMutation(LOGOUT_USER, {
    onCompleted(data) {
      updateStorageStatus(false);
      accessToken('');
      toast({
        position: 'bottom-left',
        description: 'Logged out successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      router.push('/');
    },
    onError({ message }) {
      console.log('logout error', message);
    },
  });

  return (
    <>
      <Menu closeOnBlur={true}>
        <ProfileMenuButton />
        <MenuList borderRadius='base'>
          <MenuItem text='View Profile' />
          <MenuItem text='Add Course' />
          <MenuDivider />
          <MenuItem clickAction={onOpen} text='Logout' />
        </MenuList>
      </Menu>
      <LogoutModal
        open={isOpen}
        closeModal={onClose}
        loading={loading}
        logout={logout}
      />
    </>
  );
}

export default ProfileMenu;
