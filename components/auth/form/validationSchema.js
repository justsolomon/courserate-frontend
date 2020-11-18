import * as Yup from 'yup';

const validationObject = {
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
};

export const signupValidation = Yup.object({
  ...validationObject,
  username: Yup.string().required('Required'),
  passwordConfirm: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

console.log(Yup.ref('password'));

export const loginValidation = Yup.object({
  ...validationObject,
});
