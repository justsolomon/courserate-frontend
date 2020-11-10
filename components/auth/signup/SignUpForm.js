import AuthLayout from '../AuthLayout';
import ConfirmPassword from '../ConfirmPassword';
import PasswordInput from '../PasswordInput';
import SubmitButton from '../SubmitButton';
import UsernameInput from '../UsernameInput';
import EmailInput from './EmailInput';

function SignUpForm({ formik }) {
  return (
    <AuthLayout submitForm={formik.handleSubmit}>
      <UsernameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPassword />
      <SubmitButton text='Sign Up' loading={formik.isSubmitting} />
    </AuthLayout>
  );
}

export default SignUpForm;
