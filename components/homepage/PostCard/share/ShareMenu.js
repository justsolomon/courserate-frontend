import {
  Icon,
  Menu,
  MenuItem,
  MenuList,
  Text,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FiLink, FiShare2 } from 'react-icons/fi';
import ShareButton from './ShareButton';

const sharePost = (title, url) => {
  navigator
    .share({
      title,
      text: `Check out reviews on ${title}`,
      url,
    })
    .then(() => alert('Successful share'))
    .catch((error) => alert('Error sharing', error));
};

function ShareMenu({ link, title }) {
  const { onCopy, hasCopied } = useClipboard(link);
  const toast = useToast();

  useEffect(() => {
    if (hasCopied) {
      toast({
        position: 'bottom-left',
        description: 'Copied successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  }, [hasCopied]);

  return (
    <Menu placement='top' autoSelect={false}>
      <ShareButton />
      <MenuList>
        <MenuItem onClick={onCopy}>
          <Icon as={FiLink} boxSize='16px' color='gray.500' mr='2' />
          <Text>Copy link to post</Text>
        </MenuItem>
        {navigator.share && (
          <MenuItem onClick={() => sharePost(title, link)}>
            <Icon as={FiShare2} boxSize='16px' color='gray.500' mr='2' />
            <Text>Share post via...</Text>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}

export default ShareMenu;
