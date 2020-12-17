import { useReactiveVar } from '@apollo/client';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { sortReviews } from '../../graphql/state/review/reviewActions';
import { sortedBy } from '../../graphql/state/review/reviewState';

function SortMenu() {
  const sortLogic = useReactiveVar(sortedBy);

  useEffect(() => {
    sortedBy('Old');
  }, []);

  return (
    <Box px={['4', '0']}>
      <Menu autoSelect={false} placement='bottom-end'>
        <MenuButton
          as={Button}
          fontSize='xs'
          variant='ghost'
          p='0'
          h='14px'
          mb='2'
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
        >
          <HStack>
            <Text>SORT BY</Text>
            <HStack spacing='1'>
              <Text fontSize='sm' color='green.500'>
                {sortLogic}
              </Text>
              <ChevronDownIcon boxSize='16px' />
            </HStack>
          </HStack>
        </MenuButton>
        <MenuList minW='50px' w='80px'>
          <MenuItem
            color={sortLogic === 'Old' && 'green.500'}
            onClick={() => sortReviews('Old')}
          >
            Old
          </MenuItem>
          <MenuItem
            color={sortLogic === 'New' && 'green.500'}
            onClick={() => sortReviews('New')}
          >
            New
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default SortMenu;
