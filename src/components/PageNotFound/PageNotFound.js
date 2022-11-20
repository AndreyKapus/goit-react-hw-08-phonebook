import { useNavigate } from 'react-router-dom';
import { IoMdReturnLeft } from 'react-icons/io';
import {
  ErrorPageHeader,
  PageNotFoundButton,
  PageNotFoundContainer,
  StyledIcon,
} from './PageNotFound.styled';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    navigate('/');
  };

  return (
    <PageNotFoundContainer>
      <ErrorPageHeader>Sorry, page not found</ErrorPageHeader>
      <PageNotFoundButton type="button" onClick={handleSubmit}>
        Return to main page
        <StyledIcon>
          <IoMdReturnLeft />
        </StyledIcon>
      </PageNotFoundButton>
    </PageNotFoundContainer>
  );
};

export default ErrorPage;
