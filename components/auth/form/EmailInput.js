import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/core';
import { Field } from 'formik';

function EmailInput() {
  return (
    <Field name='email'>
      {({ field, form }) => (
        <FormControl mb='4' isInvalid={form.errors.email && form.touched.email}>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input {...field} type='email' id='email' />
          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default EmailInput;
