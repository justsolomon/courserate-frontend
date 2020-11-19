import { EditIcon } from '@chakra-ui/icons';
import { MenuItem as MenuOption } from '@chakra-ui/react';

function MenuItem({ text, clickAction }) {
  return (
    <MenuOption height='40px' onClick={clickAction}>
      <EditIcon mr='2' />
      {text}
    </MenuOption>
  );
}

export default MenuItem;
