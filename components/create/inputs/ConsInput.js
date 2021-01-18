import { Field } from 'formik';
import ErrorMessage from '../../auth/form/ErrorMessage';
import Criterion from '../../course/CreateReview/Criterion';

function ConsInput() {
  return (
    <Field name='cons'>
      {({ field, form }) => {
        return (
          <Criterion
            label='Cons'
            field={field}
            placeholder='Share some of the downsides of learning this course'
            create
            displayError={form.errors.cons && form.touched.cons}
          >
            <ErrorMessage error={form.errors.cons} />
          </Criterion>
        );
      }}
    </Field>
  );
}

export default ConsInput;
