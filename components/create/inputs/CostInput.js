import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { Field } from 'formik';
import ErrorMessage from '../../auth/form/ErrorMessage';

function CostInput() {
  return (
    <Field name='cost'>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors.cost && form.touched.cost}>
            <FormLabel mb='1' htmlFor='cost' fontSize='15px'>
              Cost
            </FormLabel>
            <NumberInput value={field.value} id='cost' fontSize='15px'>
              <NumberInputField onChange={field.onChange} borderRadius='base' />
            </NumberInput>
            <ErrorMessage error={form.errors.cost} />
          </FormControl>
        );
      }}
    </Field>
  );
}

export default CostInput;
