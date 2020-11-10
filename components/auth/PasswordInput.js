import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/core';
import { useState } from 'react';
import { Field } from 'formik';

function PasswordInput() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Field name='password'>
      {({ field, form }) => (
        <FormControl
          mb='4'
          isInvalid={form.errors.password && form.touched.password}
        >
          <FormLabel htmlFor='password'>Password</FormLabel>
          <InputGroup>
            <Input
              type={passwordVisible ? 'text' : 'password'}
              id='password'
              {...field}
            />
            <InputRightElement>
              <Button
                variant='ghost'
                onClick={() => setPasswordVisible(!passwordVisible)}
                aria-label='Toggle password visibility'
              >
                <Icon name={!passwordVisible ? 'view' : 'view-off'} />
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default PasswordInput;
