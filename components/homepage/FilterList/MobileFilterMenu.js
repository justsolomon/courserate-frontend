import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import Filter from './Filter';
import filterGroups from './filterGroups';

function MobileFilterMenu() {
  return (
    <Menu closeOnSelect={false} placement='auto' autoSelect={false}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        borderRadius='base'
        variant='outline'
        mx={['2', '0']}
        mt={['2', '0']}
        mb='2'
        fontSize='15px'
      >
        Filter By
      </MenuButton>
      <MenuList borderRadius='base'>
        {filterGroups.map(({ groupTitle, filters }, index) => (
          <MenuGroup title={groupTitle} key={index}>
            {filters.map((filter, index) => (
              <MenuItem key={index} py='1'>
                <Filter filterTitle={filter} />
              </MenuItem>
            ))}
          </MenuGroup>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MobileFilterMenu;
