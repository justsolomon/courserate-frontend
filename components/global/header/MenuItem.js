import { Icon, MenuItem as MenuOption } from '@chakra-ui/core';

function MenuItem({ text, clickAction }) {
  return (
    <MenuOption height='40px' onClick={clickAction}>
      <Icon name='edit' mr='2' />
      {text}
    </MenuOption>
  );
}

export default MenuItem;
