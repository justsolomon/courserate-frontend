import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field } from 'formik';
import ErrorMessage from '../../auth/form/ErrorMessage';

function LinkInput() {
  return (
    <Field name='link'>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors.link && form.touched.link}>
            <FormLabel mb='1' htmlFor='link' fontSize='15px'>
              Link to Course
            </FormLabel>
            <Input
              {...field}
              type='text'
              id='link'
              borderRadius='base'
              fontSize='15px'
            />
            <ErrorMessage error={form.errors.link} />
          </FormControl>
        );
      }}
    </Field>
  );
}

export default LinkInput;
