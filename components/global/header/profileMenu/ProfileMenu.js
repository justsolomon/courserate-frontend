import { useMutation } from '@apollo/client';
import { Menu, useDisclosure, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  accessToken,
  updateStorageStatus,
} from '../../../../graphql/state/authState';
import LogoutModal from '../../../auth/logout/LogoutModal';
import LOGOUT_USER from '../../../auth/logout/logoutMutation';
import ProfileMenuButton from './ProfileMenuButton';
import { errorToast, successToast } from '../../../auth/logout/logoutStatus';
import ProfileMenuList from './ProfileMenuList';

function ProfileMenu() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [logout, { loading }] = useMutation(LOGOUT_USER, {
    onCompleted() {
      updateStorageStatus(false);
      accessToken('');
      toast(successToast);
      router.push('/');
      router.reload();
    },
    onError({ message }) {
      console.log('logout error', message);
      toast({ ...errorToast, description: message });
    },
  });

  return (
    <>
      <Menu closeOnBlur={true}>
        <ProfileMenuButton />
        <ProfileMenuList openModal={onOpen} />
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
