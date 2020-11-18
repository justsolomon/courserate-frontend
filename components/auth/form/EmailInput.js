import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field } from 'formik';
import ErrorMessage from './ErrorMessage';

function EmailInput() {
  return (
    <Field name='email'>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.email && form.touched.email}>
          <FormLabel mb='1' htmlFor='email'>
            Email address
          </FormLabel>
          <Input {...field} type='email' id='email' borderRadius='base' />
          <ErrorMessage error={form.errors.email} />
        </FormControl>
      )}
    </Field>
  );
}

export default EmailInput;
