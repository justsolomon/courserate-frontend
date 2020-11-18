import { Button, Icon } from '@chakra-ui/core';

function ToggleThemeButton({ colorMode, switchTheme }) {
  return (
    <Button aria-label='Toggle Dark Mode' variant='ghost' onClick={switchTheme}>
      <Icon name={colorMode === 'light' ? 'moon' : 'sun'} size='24px' />
    </Button>
  );
}

export default ToggleThemeButton;
