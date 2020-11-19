import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field } from 'formik';
import ErrorMessage from '../form/ErrorMessage';

function UsernameInput() {
  return (
    <Field name='username'>
      {({ field, form }) => {
        return (
          <FormControl
            isInvalid={form.errors.username && form.touched.username}
          >
            <FormLabel mb='1' htmlFor='username'>
              Username
            </FormLabel>
            <Input {...field} type='text' id='username' borderRadius='base' />
            <ErrorMessage error={form.errors.username} />
          </FormControl>
        );
      }}
    </Field>
  );
}

export default UsernameInput;
