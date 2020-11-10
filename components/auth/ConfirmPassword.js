import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/core';
import React, { useState } from 'react';

function ConfirmPassword() {
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <FormControl mb='4'>
      <FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
      <InputGroup>
        <Input
          type={confirmPasswordVisible ? 'text' : 'password'}
          id='confirm-password'
        />
        <InputRightElement>
          <Button
            variant='ghost'
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            aria-label='Toggle confirm password visibility'
          >
            <Icon name={!confirmPasswordVisible ? 'view' : 'view-off'} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default ConfirmPassword;
