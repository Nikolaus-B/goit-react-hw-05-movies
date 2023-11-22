import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrorMessage,
  Field,
  FoemField,
  Form,
  FormButton,
} from './MovieForm.styled';

const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const MovieForm = ({ submitClick }) => {
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={MovieSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          submitClick(values);
        }}
      >
        <Form>
          <FoemField>
            Write the movie you want to find
            <Field name="title" placeholder="your movie" />
            <ErrorMessage component={'span'} name="title" />
          </FoemField>

          <FormButton type="submit">Search</FormButton>
        </Form>
      </Formik>
    </div>
  );
};
