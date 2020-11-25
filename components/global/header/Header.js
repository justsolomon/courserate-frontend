import { Box, Stack, useColorMode } from '@chakra-ui/react';
import AppName from './AppName';
import ToggleThemeButton from './ToggleThemeButton';
import AuthRoutes from './AuthRoutes';
import { loggedIn } from '../../../graphql/state/authState';
import ProfileMenu from './profile/ProfileMenu';
import SearchBar from './SearchBar/SearchBar';
import MobileNav from './MobileNav';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = { light: 'gray.200', dark: 'gray.600' };
  const bgColor = { light: 'white', dark: '#1A202C' };

  const userLoggedIn = loggedIn();

  return (
    <Stack
      isInline
      px={['4', '6', '8']}
      height='55px'
      borderBottom='1px'
      borderBottomColor={borderColor[colorMode]}
      justify='space-between'
      position='sticky'
      top='0px'
      align='center'
      zIndex='2'
      bg={bgColor[colorMode]}
    >
      <AppName />
      <MobileNav
        colorMode={colorMode}
        switchTheme={toggleColorMode}
        loggedIn={userLoggedIn}
      />

      {/* desktop nav */}
      <Stack isInline spacing='1' align='center' d={['none', , 'flex']}>
        <SearchBar />
        <Box>
          <ToggleThemeButton
            colorMode={colorMode}
            switchTheme={toggleColorMode}
          />
        </Box>
        {userLoggedIn ? <ProfileMenu /> : <AuthRoutes />}
      </Stack>
    </Stack>
  );
}

export default Header;
