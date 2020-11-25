import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import AppName from './AppName';
import AuthRoutes from './AuthRoutes';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import SearchBar from './SearchBar/SearchBar';
import ToggleThemeButton from './ToggleThemeButton';

function MobileNav(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box d={['block', , 'none']}>
      <ToggleThemeButton {...props} size='20px' />
      <IconButton
        variant='ghost'
        p='0'
        h='20px'
        minWidth='20px'
        aria-label='Open mobile navigation'
        icon={<Icon as={FaBars} boxSize='20px' />}
        onClick={onOpen}
      />
      <Drawer size='full' isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody px={['4', '6']}>
              <HStack align='center' mb='4'>
                <AppName />
                <DrawerCloseButton mr={['4', '6']} w='0' size='lg' />
              </HStack>
              <SearchBar />
              {props.loggedIn ? <ProfileMenu /> : <AuthRoutes />}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
