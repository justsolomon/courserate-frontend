import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';

function ReviewContent({ reviews, title }) {
  return (
    <Box mt='1' fontSize={['15px', , 'md']}>
      <Text fontWeight='medium'>{title}</Text>
      <UnorderedList>
        {reviews.map((review, index) => (
          <ListItem key={index}>{review}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default ReviewContent;
