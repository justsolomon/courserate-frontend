import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { useToast } from '@chakra-ui/react';
import { errorToast, successToast } from '../auth/logout/logoutStatus';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { editCourseValidation } from '../create/validationSchema';
import EDIT_COURSE from './editCourseMutation';
import CreateCourseForm from '../create/CreateCourseForm';
import { refetchCourse } from '../../graphql/state/review/reviewState';

function EditCourseContainer({ title, link, level, cost, skills, id }) {
  const [formActions, setFormActions] = useState({});

  const toast = useToast();
  const router = useRouter();

  const [editCourse] = useMutation(EDIT_COURSE, {
    onCompleted(data) {
      formActions.setSubmitting(false);
      toast({
        ...successToast,
        description: 'Changes saved successfully',
      });

      //redirect to course page
      setTimeout(() => router.push(`/post/${data.editCourse.id}`), 1000);
      refetchCourse()();
    },
    onError({ message }) {
      formActions.setSubmitting(false);
      toast({ ...errorToast, description: message });
    },
  });

  return (
    <Formik
      initialValues={{ title, link, level, cost, skills }}
      onSubmit={(values, actions) => {
        setFormActions(actions);
        editCourse({
          variables: {
            ...values,
            courseId: id,
            cost: Math.round(Number(values.cost)),
          },
        });
      }}
      validationSchema={editCourseValidation}
    >
      {(props) => <CreateCourseForm formik={props} edit />}
    </Formik>
  );
}

export default EditCourseContainer;
