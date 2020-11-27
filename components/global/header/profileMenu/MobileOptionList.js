import { Icon, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaEdit, FaSignOutAlt, FaUser } from 'react-icons/fa';
import MobileOption from './MobileOption';

function MobileOptionList({ openModal, closeDrawer }) {
  const router = useRouter();
  return (
    <VStack align='flex-start' spacing='4' mt='4' d={['flex', , 'none']}>
      <MobileOption
        clickAction={() => {
          router.push(`/user/${localStorage['username']}`);
          closeDrawer();
        }}
        text='View Profile'
      >
        <Icon
          as={FaUser}
          mr='3'
          boxSize='18px'
          _groupHover={{ color: 'green.500' }}
        />
      </MobileOption>

      <MobileOption text='Add Course'>
        <Icon
          as={FaEdit}
          mr='3'
          boxSize='18px'
          _groupHover={{ color: 'green.500' }}
        />
      </MobileOption>

      <MobileOption clickAction={openModal} text='Logout'>
        <Icon
          as={FaSignOutAlt}
          mr='3'
          boxSize='18px'
          _groupHover={{ color: 'green.500' }}
        />
      </MobileOption>
    </VStack>
  );
}

export default MobileOptionList;
