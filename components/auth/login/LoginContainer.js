import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  refreshAction,
  updateAuthState,
} from '../../../graphql/state/authState';
import { loginValidation } from '../form/validationSchema';
import LOGIN_USER from './loginMutation';
import LoginForm from './LoginForm';

const values = {
  email: '',
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

      //store data in state
      updateAuthState(data.login);

      //start countdown to silent refresh
      const startSilentRefresh = refreshAction();
      startSilentRefresh();

      setTimeout(() => router.push('/'), 1000);
    },
    onError({ message }) {
      console.log('error', message);
      formActions.setSubmitting(false);
      setSuccess(false);
      setError(true);
      setErrorMsg(message);
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
