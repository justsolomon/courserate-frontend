import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { loginValidation } from '../form/validationSchema';
import LOGIN_USER from './graphql/loginMutation';
import LoginForm from './LoginForm';

const values = {
  username: '',
  password: '',
};

function LoginContainer() {
  const [formActions, setFormActions] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      console.log('completed', data);
      formActions.setSubmitting(false);
      setError(false);
      setSuccess(true);
      setTimeout(() => router.push('/'), 1000);
    },
    onError({ message }) {
      console.log('error', message);
      formActions.setSubmitting(false);
      setSuccess(false);
      setError(true);
      if (message === 'Wrong Credentials') setErrorMsg('Password is incorrect');
      else setErrorMsg(message);
    },
  });

  return (
    <Formik
      initialValues={values}
      onSubmit={(values, actions) => {
        setFormActions(actions);
        console.log(values);
        loginUser({ variables: values });
      }}
      validationSchema={loginValidation}
    >
      {(props) => (
        <LoginForm
          formik={props}
          success={success}
          error={error}
          errorMessage={errorMsg}
        />
      )}
    </Formik>
  );
}

export default LoginContainer;
