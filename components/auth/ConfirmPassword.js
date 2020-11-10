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
import { Field } from 'formik';
import React, { useState } from 'react';

function ConfirmPassword() {
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <Field name='passwordConfirm'>
      {({ field, form }) => (
        <FormControl
          mb='4'
          isInvalid={
            form.errors.passwordConfirm && form.touched.passwordConfirm
          }
        >
          <FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={confirmPasswordVisible ? 'text' : 'password'}
              id='confirm-password'
              {...field}
            />
            <InputRightElement>
              <Button
                variant='ghost'
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                aria-label='Toggle confirm password visibility'
              >
                <Icon name={!confirmPasswordVisible ? 'view' : 'view-off'} />
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{form.errors.passwordConfirm}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default ConfirmPassword;
