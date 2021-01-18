import * as Yup from 'yup';
import filterCriterion from '../course/EditReview/filterCriterion';

const objectValidation = {
  title: Yup.string().required('Required'),
  link: Yup.string().url('Invalid url').required('Required'),
  skills: Yup.array().required('Required'),
  cost: Yup.number().required('Required'),
  level: Yup.string().required('Required'),
};

Yup.addMethod(Yup.string, 'checkIfEmpty', function (errMsg) {
  return this.test('validate-criterion', function (value) {
    return !filterCriterion(value).length
      ? this.createError({
          message: errMsg,
          path: this.path,
        })
      : true;
  });
});

export const createCourseValidation = Yup.object({
  ...objectValidation,
  pros: Yup.string()
    .required('Required')
    .checkIfEmpty('Please enter at least one pro'),

  cons: Yup.string()
    .required('Required')
    .checkIfEmpty('Please enter at least one con'),
});

export const editCourseValidation = Yup.object({
  ...objectValidation,
});
