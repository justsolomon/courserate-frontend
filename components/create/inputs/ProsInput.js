import { Field } from 'formik';
import ErrorMessage from '../../auth/form/ErrorMessage';
import Criterion from '../../course/CreateReview/Criterion';

function ProsInput() {
  return (
    <Field name='pros'>
      {({ field, form }) => {
        return (
          <Criterion
            label='Pros'
            field={field}
            placeholder='Share some of the best reasons to learn this course'
            create
            displayError={form.errors.pros && form.touched.pros}
          >
            <ErrorMessage error={form.errors.pros} />
          </Criterion>
        );
      }}
    </Field>
  );
}

export default ProsInput;
