import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
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
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children='$'
              />
              <NumberInputField
                pl='9'
                onChange={field.onChange}
                borderRadius='base'
                placeholder='Enter amount'
              />
            </NumberInput>
            <ErrorMessage error={form.errors.cost} />
          </FormControl>
        );
      }}
    </Field>
  );
}

export default CostInput;
