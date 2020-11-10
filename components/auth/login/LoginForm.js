import AuthLayout from '../AuthLayout';
import PasswordInput from '../PasswordInput';
import SubmitButton from '../SubmitButton';
import UsernameInput from '../UsernameInput';

function LoginForm() {
  return (
    <AuthLayout>
      <UsernameInput />
      <PasswordInput />
      <SubmitButton text='Login' />
    </AuthLayout>
  );
}

export default LoginForm;
