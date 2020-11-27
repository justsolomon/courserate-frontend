import { Box, Divider, HStack, Icon, Text } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

function MobileOption({ clickAction, text, children }) {
  return (
    <Box w='100%' role='group'>
      <HStack justify='space-between' align='center' onClick={clickAction}>
        <HStack align='center'>
          {children}
          <Text _groupHover={{ color: 'green.500' }}>{text}</Text>
        </HStack>
        {!(text === 'Logout') && (
          <Icon
            as={FaChevronRight}
            _groupHover={{ color: 'green.500' }}
            boxSize='18px'
          />
        )}
      </HStack>
      <Divider ml='9' mt='4' />
    </Box>
  );
}

export default MobileOption;
