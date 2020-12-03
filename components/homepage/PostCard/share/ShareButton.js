import { Button, Icon, MenuButton, Text } from '@chakra-ui/react';
import { FaShare } from 'react-icons/fa';

function ShareButton() {
  return (
    <MenuButton
      as={Button}
      size='sm'
      variant='ghost'
      spacing='2'
      align='center'
      justify='center'
      px='2'
      py='0'
      leftIcon={<Icon as={FaShare} boxSize='14px' color='gray.600' />}
    >
      <Text fontSize='sm' color='gray.600'>
        Share
      </Text>
    </MenuButton>
  );
}

export default ShareButton;
