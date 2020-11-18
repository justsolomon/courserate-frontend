import AuthLayout from '../form/AuthLayout';
import ErrorAlert from '../alerts/ErrorAlert';
import PasswordInput from '../form/PasswordInput';
import SubmitButton from '../form/SubmitButton';
import SuccessAlert from '../alerts/SuccessAlert';
import ChangeAuth from '../form/ChangeAuth';
import EmailInput from '../form/EmailInput';

function LoginForm({ formik, success, error, errorMessage }) {
  return (
    <AuthLayout submitForm={formik.handleSubmit}>
      {success && <SuccessAlert text='Logged in' />}
      {error && <ErrorAlert errorMessage={errorMessage} />}
      <EmailInput />
      <PasswordInput />
      <SubmitButton text='Login' loading={formik.isSubmitting} />
      <ChangeAuth login />
    </AuthLayout>
  );
}

export default LoginForm;
