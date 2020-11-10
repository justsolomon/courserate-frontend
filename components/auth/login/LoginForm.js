import AuthLayout from '../form/AuthLayout';
import ErrorAlert from '../alerts/ErrorAlert';
import PasswordInput from '../form/PasswordInput';
import SubmitButton from '../form/SubmitButton';
import SuccessAlert from '../alerts/SuccessAlert';
import UsernameInput from '../form/UsernameInput';
import ChangeAuth from '../form/ChangeAuth';

function LoginForm({ formik, success, error, errorMessage }) {
  return (
    <AuthLayout submitForm={formik.handleSubmit}>
      {success && <SuccessAlert text='Logged in' />}
      {error && <ErrorAlert errorMessage={errorMessage} />}
      <UsernameInput />
      <PasswordInput />
      <SubmitButton text='Login' loading={formik.isSubmitting} />
      <ChangeAuth login />
    </AuthLayout>
  );
}

export default LoginForm;
