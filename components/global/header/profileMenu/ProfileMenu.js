import { useMutation } from '@apollo/client';
import { Box, Menu, useDisclosure, useToast } from '@chakra-ui/react';
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
import MobileOptionList from './MobileOptionList';

function ProfileMenu({ closeDrawer }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [logout, { loading }] = useMutation(LOGOUT_USER, {
    onCompleted() {
      updateStorageStatus(false);
      accessToken('');
      toast(successToast);
      if (router.pathname === '/') router.reload();
      else router.push('/');
    },
    onError({ message }) {
      toast({ ...errorToast, description: message });
    },
  });

  return (
    <>
      <Box d={['none', , 'block']}>
        <Menu closeOnBlur={true}>
          <ProfileMenuButton />
          <ProfileMenuList openModal={onOpen} />
        </Menu>
      </Box>

      {/* mobile nav options */}
      <MobileOptionList openModal={onOpen} closeDrawer={closeDrawer} />

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
