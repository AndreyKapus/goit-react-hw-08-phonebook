import { register } from 'components/Redux/contactsOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  StyledTittle,
  StyledLableName,
  StyledButton,
  StyledIcon,
} from './RegisterPage.styled';
import { MdDoneAll } from 'react-icons/md';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

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

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
  };

  return (
    <div>
      <StyledTittle>Sign in</StyledTittle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <StyledLableName>
            Name
            <StyledField type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </StyledLableName>
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
          <StyledButton type="submit">
            Submit{' '}
            <StyledIcon>
              <MdDoneAll />
            </StyledIcon>
          </StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
export default RegisterForm;
