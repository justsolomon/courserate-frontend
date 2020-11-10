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

function PasswordInput() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <FormControl mb='4'>
      <FormLabel htmlFor='password'>Password</FormLabel>
      <InputGroup>
        <Input type={passwordVisible ? 'text' : 'password'} id='password' />
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
    </FormControl>
  );
}

export default PasswordInput;
