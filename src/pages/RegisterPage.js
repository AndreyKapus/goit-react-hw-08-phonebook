import { register } from 'components/Redux/contactsOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDispatch } from 'react-redux';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().min(3).max(15).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: e.name,
        email: e.email,
        password: e.password,
      })
    );
    e.reset();
  };
  // const handleSubmit = (values, { resetForm }) => {
  // const user = {
  //   name: values.name,
  //   email: values.email,
  //   password: values.password,
  // };

  // console.log(values);
  // console.log(resetForm);
  // resetForm();
  // };
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
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
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
export default RegisterForm;
