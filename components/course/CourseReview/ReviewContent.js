import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';

function ReviewContent({ reviews, title }) {
  return (
    <Box mt='1'>
      <Text fontWeight='medium'>{title}</Text>
      <UnorderedList>
        {reviews.map((review) => (
          <ListItem>{review}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default ReviewContent;
