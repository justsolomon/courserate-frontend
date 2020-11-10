import { Formik } from 'formik';
import { signupValidation } from '../validationSchema';
import SignUpForm from './SignUpForm';

const values = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
};
console.log(signupValidation);

function SignUpContainer() {
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
      validationSchema={signupValidation}
    >
      {(props) => <SignUpForm formik={props} />}
    </Formik>
  );
}

export default SignUpContainer;
