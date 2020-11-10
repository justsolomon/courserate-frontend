import { FormControl, FormLabel, Input } from '@chakra-ui/core';

function UsernameInput() {
  return (
    <FormControl mb='4'>
      <FormLabel htmlFor='username'>Username</FormLabel>
      <Input type='text' id='username' />
    </FormControl>
  );
}

export default UsernameInput;
