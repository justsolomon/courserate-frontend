import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

function ToggleThemeButton({ colorMode, switchTheme }) {
  return (
    <Button aria-label='Toggle Dark Mode' variant='ghost' onClick={switchTheme}>
      {colorMode === 'light' ? (
        <MoonIcon boxSize='24px' />
      ) : (
        <SunIcon boxSize='24px' />
      )}
    </Button>
  );
}

export default ToggleThemeButton;
