import {
  StartPageContainer,
  StyledStartPageTittle,
  StyledP,
  StyledLink,
} from './StartPage.styled';

const StartLogOutPage = () => {
  return (
    <StartPageContainer>
      <StyledStartPageTittle>
        Create your own, secure, phone book in a couple clicks
      </StyledStartPageTittle>
      <StyledP>
        <StyledLink href="http://localhost:3000/goit-react-hw-08-phonebook/register">
          Sign up
        </StyledLink>
        &nbsp;or&nbsp;
        <StyledLink href="http://localhost:3000/goit-react-hw-08-phonebook/login">
          Log in
        </StyledLink>
        &nbsp;to start!
      </StyledP>
    </StartPageContainer>
  );
};

export default StartLogOutPage;
