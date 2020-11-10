import ErrorAlert from '../alerts/ErrorAlert';
import SuccessAlert from '../alerts/SuccessAlert';
import AuthLayout from '../form/AuthLayout';
import ChangeAuth from '../form/ChangeAuth';
import ConfirmPassword from '../form/ConfirmPassword';
import PasswordInput from '../form/PasswordInput';
import SubmitButton from '../form/SubmitButton';
import UsernameInput from '../form/UsernameInput';
import EmailInput from './EmailInput';

function SignUpForm({ formik, success, error, errorMessage }) {
  return (
    <AuthLayout submitForm={formik.handleSubmit}>
      {success && <SuccessAlert text='Account created' />}
      {error && <ErrorAlert errorMessage={errorMessage} />}
      <UsernameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPassword />
      <SubmitButton text='Sign Up' loading={formik.isSubmitting} />
      <ChangeAuth />
    </AuthLayout>
  );
}

export default SignUpForm;
