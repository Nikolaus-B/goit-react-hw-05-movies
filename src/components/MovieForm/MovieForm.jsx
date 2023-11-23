import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrorMessage,
  Field,
  Form,
  FormButton,
  FormField,
} from './MovieForm.styled';

const MovieSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
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
          <FormField>
            <Field name="title" placeholder="your movie" />
            <ErrorMessage component={'span'} name="title" />
          </FormField>

          <FormButton type="submit">Search</FormButton>
        </Form>
      </Formik>
    </div>
  );
};
