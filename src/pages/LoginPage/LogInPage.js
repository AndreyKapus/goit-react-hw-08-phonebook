import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'components/Redux/contactsOperations';
import * as yup from 'yup';
import styled from '@emotion/styled';
import {
  StyledTittle,
  StyledLableName,
  StyledButton,
} from '../RegisterPage/RegisterPage.styled';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
const StyledField = styled(Field)`
  width: 300px;
  height: 30px;
  margin-bottom: 30px;
  border: 0.5px solid;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  font-family: Bradley Hand;
  font-size: 20px;
`;

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(3).max(15).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LogInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
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
      <StyledTittle>Log in</StyledTittle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <StyledLableName>
            Email
            <StyledField type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </StyledLableName>
          <StyledLableName>
            Password
            <StyledField type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </StyledLableName>
          <StyledButton type="submit" onSubmit={handleSubmit}>
            Submit
          </StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
export default LogInForm;
