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
        <StyledLink to="/register">Sign up</StyledLink>
        &nbsp;or&nbsp;
        <StyledLink to="/login">Log in</StyledLink>
        &nbsp;to start!
      </StyledP>
    </StartPageContainer>
  );
};

export default StartLogOutPage;
