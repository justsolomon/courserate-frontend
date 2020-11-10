import AuthLayout from '../AuthLayout';
import PasswordInput from '../PasswordInput';
import SubmitButton from '../SubmitButton';
import UsernameInput from '../UsernameInput';

function LoginForm({ formik }) {
  return (
    <AuthLayout submitForm={formik.handleSubmit}>
      <UsernameInput />
      <PasswordInput />
      <SubmitButton text='Login' loading={formik.isSubmitting} />
    </AuthLayout>
  );
}

export default LoginForm;
