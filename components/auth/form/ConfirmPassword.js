import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Field } from 'formik';
import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

function ConfirmPassword() {
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <Field name='passwordConfirm'>
      {({ field, form }) => (
        <FormControl
          isInvalid={
            form.errors.passwordConfirm && form.touched.passwordConfirm
          }
        >
          <FormLabel mb='1' htmlFor='confirm-password'>
            Confirm Password
          </FormLabel>
          <InputGroup>
            <Input
              type={confirmPasswordVisible ? 'text' : 'password'}
              id='confirm-password'
              {...field}
              borderRadius='base'
            />
            <InputRightElement>
              <Button
                variant='ghost'
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                aria-label='Toggle confirm password visibility'
              >
                {!confirmPasswordVisible ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <ErrorMessage error={form.errors.passwordConfirm} />
        </FormControl>
      )}
    </Field>
  );
}

export default ConfirmPassword;
