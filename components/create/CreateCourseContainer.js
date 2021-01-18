import { Formik } from 'formik';
import CreateCourseForm from './CreateCourseForm';
import { useMutation } from '@apollo/client';
import { createCourseValidation } from './validationSchema';
import { useToast } from '@chakra-ui/react';
import { errorToast, successToast } from '../auth/logout/logoutStatus';
import { useRouter } from 'next/router';
import CREATE_COURSE from './createCourseMutation';
import { useState } from 'react';
import filterCriterion from '../course/EditReview/filterCriterion';

const values = {
  title: '',
  link: '',
  pros: '',
  cons: '',
  level: '',
  cost: 0,
  skills: [],
};

function CreateCourseContainer() {
  const [formActions, setFormActions] = useState({});

  const toast = useToast();
  const router = useRouter();

  const [createCourse] = useMutation(CREATE_COURSE, {
    onCompleted(data) {
      formActions.setSubmitting(false);
      toast({
        ...successToast,
        description: 'Course created successfully',
      });

      //redirect to created course page
      setTimeout(() => router.push(`/post/${data.createCourse.id}`), 1000);
    },
    onError({ message }) {
      formActions.setSubmitting(false);
      toast({ ...errorToast, description: message });
    },
  });

  return (
    <Formik
      initialValues={values}
      onSubmit={(values, actions) => {
        const { cost, pros, cons } = values;

        setFormActions(actions);
        createCourse({
          variables: {
            ...values,
            cost: Math.round(Number(cost)),
            pros: filterCriterion(pros),
            cons: filterCriterion(cons),
          },
        });
      }}
      validationSchema={createCourseValidation}
    >
      {(props) => <CreateCourseForm formik={props} />}
    </Formik>
  );
}

export default CreateCourseContainer;
