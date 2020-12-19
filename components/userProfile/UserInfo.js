import { VStack, Image, Text, HStack, Icon, Stack } from '@chakra-ui/react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegCalendarAlt } from 'react-icons/fa';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function UserInfo({ username, email, createdAt, loading, error }) {
  const date = new Date(createdAt);

  return (
    <VStack
      align='flex-start'
      px={['4', '0']}
      w={['100%', , '20%']}
      fontSize='15px'
    >
      <Stack direction={['row', , 'column']} spacing={['4', , '2']}>
        <Image
          rounded='full'
          w={['25%', , '100%']}
          src='https://d33wubrfki0l68.cloudfront.net/e2cf3a3a0efebfaed3a3666ee4500aa8ddc8abd0/6de5a/static/avatar-fb2e8aabd87a0514720c3eb0c564193e.png'
        />
        <Text fontWeight='bold' pt={['2', , '0']} fontSize='xl'>
          {username}
        </Text>
      </Stack>
      {!error && (
        <>
          <HStack>
            <Icon as={HiOutlineMail} color='gray.600' boxSize='18px' />
            <Text>{email}</Text>
          </HStack>
          <HStack>
            <Icon as={FaRegCalendarAlt} color='gray.600' boxSize='18px' />
            <Text>
              {!loading && createdAt
                ? `Joined ${months[date.getMonth()]} ${date.getFullYear()}`
                : 'Joined'}
            </Text>
          </HStack>
        </>
      )}
    </VStack>
  );
}

export default UserInfo;
