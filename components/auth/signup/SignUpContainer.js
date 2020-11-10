import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { signupValidation } from '../form/validationSchema';
import SignUpForm from './SignUpForm';
import REGISTER_USER from './graphql/signupMutation';
import { useState } from 'react';
import { useRouter } from 'next/router';

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
      setErrorMsg(message);
    },
  });

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
