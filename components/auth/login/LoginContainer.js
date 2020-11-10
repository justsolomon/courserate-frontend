import { Formik } from 'formik';
import { loginValidation } from '../validationSchema';
import LoginForm from './LoginForm';

const values = {
  username: '',
  password: '',
};

function LoginContainer() {
  return (
    <Formik
      initialValues={values}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          // submitForm(values);
          alert(JSON.stringify(values));
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={loginValidation}
    >
      {(props) => <LoginForm formik={props} />}
    </Formik>
  );
}

export default LoginContainer;
