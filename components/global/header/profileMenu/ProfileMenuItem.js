import { MenuItem } from '@chakra-ui/react';

function ProfileMenuItem({ text, clickAction, children }) {
  return (
    <MenuItem height='40px' onClick={clickAction}>
      {children}
      {text}
    </MenuItem>
  );
}

export default ProfileMenuItem;
