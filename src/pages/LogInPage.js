import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(3).max(15).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LogInForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // const user = {
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    // };

    console.log(values);
    console.log(resetForm);
    resetForm();
  };
  return (
    <div>
      <h1>Sign in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LogInForm;
