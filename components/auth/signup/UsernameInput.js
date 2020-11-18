import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/core';
import { Field } from 'formik';

function UsernameInput() {
  return (
    <Field name='username'>
      {({ field, form }) => {
        return (
          <FormControl
            mb='4'
            isInvalid={form.errors.username && form.touched.username}
          >
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input {...field} type='text' id='username' />
            <FormErrorMessage>{form.errors.username}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default UsernameInput;
