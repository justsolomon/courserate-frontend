import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { Field } from 'formik';
import ErrorMessage from '../../auth/form/ErrorMessage';

function LevelInput() {
  return (
    <Field name='level'>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors.level && form.touched.level}>
            <FormLabel mb='1' htmlFor='level' fontSize='15px'>
              Level
            </FormLabel>
            <Select
              placeholder='Select level'
              {...field}
              fontSize='15px'
              _focus={{
                boxShadow: '0 0 0 1px #3182ce !important',
                borderColor: '#3182ce',
              }}
              borderRadius='base'
            >
              <option value='Beginner'>Beginner</option>
              <option value='Intermediate'>Intermediate</option>
              <option value='Expert'>Expert</option>
            </Select>
            <ErrorMessage error={form.errors.level} />
          </FormControl>
        );
      }}
    </Field>
  );
}

export default LevelInput;
