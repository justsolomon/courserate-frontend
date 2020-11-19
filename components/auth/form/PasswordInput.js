import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Field } from 'formik';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import ErrorMessage from './ErrorMessage';

function PasswordInput() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Field name='password'>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.password && form.touched.password}>
          <FormLabel mb='1' htmlFor='password'>
            Password
          </FormLabel>
          <InputGroup>
            <Input
              type={passwordVisible ? 'text' : 'password'}
              id='password'
              {...field}
              borderRadius='base'
            />
            <InputRightElement>
              <Button
                variant='ghost'
                onClick={() => setPasswordVisible(!passwordVisible)}
                aria-label='Toggle password visibility'
              >
                {!passwordVisible ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <ErrorMessage error={form.errors.password} />
        </FormControl>
      )}
    </Field>
  );
}

export default PasswordInput;
