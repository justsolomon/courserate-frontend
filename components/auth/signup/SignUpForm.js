import { FormControl, FormLabel, Input } from '@chakra-ui/core';
import { useState } from 'react';
import AuthLayout from '../AuthLayout';
import ConfirmPassword from '../ConfirmPassword';
import PasswordInput from '../PasswordInput';
import SubmitButton from '../SubmitButton';
import UsernameInput from '../UsernameInput';

function SignUpForm() {
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <AuthLayout>
      <UsernameInput />
      <FormControl>
        <FormLabel htmlFor='email'>Email address</FormLabel>
        <Input type='email' id='email' />
      </FormControl>
      <PasswordInput />
      <ConfirmPassword />
      <SubmitButton text='Sign Up' />
    </AuthLayout>
  );
}

export default SignUpForm;
