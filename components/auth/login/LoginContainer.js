import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { refreshAction } from '../../../graphql/state/auth/authState';
import { loginValidation } from '../form/validationSchema';
import LOGIN_USER from './loginMutation';
import LoginForm from './LoginForm';
import redirectUser from '../form/redirect';
import { updateAuthState } from '../../../graphql/state/auth/authActions';

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
      formActions.setSubmitting(false);
      setError(false);
      setSuccess(true);

      //store data in state
      const { user, jwt } = data.login;
      updateAuthState(user.username, jwt);

      //start countdown to silent refresh
      const startSilentRefresh = refreshAction();
      startSilentRefresh(true);

      setTimeout(() => router.push('/'), 1000);
    },
    onError({ message }) {
      formActions.setSubmitting(false);
      setSuccess(false);
      setError(true);
      setErrorMsg(message);
    },
  });

  useEffect(() => {
    //redirect user to profile page if logged in
    redirectUser(router);
  }, []);

  return (
    <Formik
      initialValues={values}
      onSubmit={(values, actions) => {
        setFormActions(actions);
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
