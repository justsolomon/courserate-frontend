import { useRouter } from 'next/router';
import ProfileMenuItem from './ProfileMenuItem';
import { FaRegEdit, FaRegUser } from 'react-icons/fa';
import { Icon, MenuDivider, MenuList } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';

function ProfileMenuList({ openModal }) {
  const router = useRouter();
  return (
    <MenuList borderRadius='base' minW='100px' w='200px'>
      <ProfileMenuItem
        clickAction={() => router.push(`/user/${localStorage['username']}`)}
        text='View Profile'
      >
        <Icon as={FaRegUser} mr='3' />
      </ProfileMenuItem>
      <ProfileMenuItem text='Add Course'>
        <Icon as={FaRegEdit} mr='3' />
      </ProfileMenuItem>
      <MenuDivider />
      <ProfileMenuItem clickAction={openModal} text='Logout'>
        <Icon as={FiLogOut} mr='3' />
      </ProfileMenuItem>
    </MenuList>
  );
}

export default ProfileMenuList;
