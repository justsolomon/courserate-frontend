import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

function ToggleThemeButton({ colorMode, switchTheme }) {
  return (
    <IconButton
      aria-label='Toggle Dark Mode'
      variant='ghost'
      onClick={switchTheme}
      mx='2'
      icon={
        colorMode === 'light' ? (
          <MoonIcon boxSize={['20px', '24px']} />
        ) : (
          <SunIcon boxSize={['20px', '24px']} />
        )
      }
    />
  );
}

export default ToggleThemeButton;
