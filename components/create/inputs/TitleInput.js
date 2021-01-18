import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field } from 'formik';
import ErrorMessage from '../../auth/form/ErrorMessage';

function TitleInput() {
  return (
    <Field name='title'>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors.title && form.touched.title}>
            <FormLabel mb='1' htmlFor='title' fontSize='15px'>
              Title
            </FormLabel>
            <Input
              {...field}
              type='text'
              id='title'
              borderRadius='base'
              fontSize='15px'
            />
            <ErrorMessage error={form.errors.title} />
          </FormControl>
        );
      }}
    </Field>
  );
}

export default TitleInput;
