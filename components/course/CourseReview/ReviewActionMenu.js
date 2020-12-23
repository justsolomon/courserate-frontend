import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { VscEllipsis } from 'react-icons/vsc';
import { MdEdit, MdDelete } from 'react-icons/md';
import DeleteReviewModal from '../DeleteReview/DeleteReviewModal';

function ReviewActionMenu({ reviewId, openEdit }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton
          as={IconButton}
          icon={<VscEllipsis />}
          size='xs'
          variant='ghost'
        />
        <MenuList minW='50px' w='150px'>
          <MenuItem onClick={openEdit}>
            <Icon mr='2' boxSize='18px' as={MdEdit} color='gray.600' />
            Edit
          </MenuItem>
          <MenuDivider my='1' />
          <MenuItem onClick={onOpen}>
            <Icon mr='2' boxSize='18px' as={MdDelete} color='gray.600' />
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
      <DeleteReviewModal
        open={isOpen}
        closeModal={onClose}
        reviewId={reviewId}
      />
    </>
  );
}

export default ReviewActionMenu;
