import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { signupValidation } from '../form/validationSchema';
import SignUpForm from './SignUpForm';
import REGISTER_USER from './signupMutation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import redirectUser from '../form/redirect';
import { updateAuthState } from '../../../graphql/state/auth/authActions';
import { refreshAction } from '../../../graphql/state/auth/authState';

const values = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

function SignUpContainer() {
  const [formActions, setFormActions] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted(data) {
      formActions.setSubmitting(false);
      setError(false);
      setSuccess(true);

      //store data in state
      const { user, jwt } = data.register;
      updateAuthState(user.username, jwt);

      //start countdown to silent refresh
      const startSilentRefresh = refreshAction();
      startSilentRefresh();

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
        console.log(values);
        setFormActions(actions);
        registerUser({ variables: values });
      }}
      validationSchema={signupValidation}
    >
      {(props) => (
        <SignUpForm
          formik={props}
          success={success}
          error={error}
          errorMessage={errorMsg}
        />
      )}
    </Formik>
  );
}

export default SignUpContainer;
