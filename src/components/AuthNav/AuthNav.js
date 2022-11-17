import { NavLink } from 'react-router-dom';
import { StyledNav, StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <StyledNav>
        <StyledNavLink to="/register">Sign up</StyledNavLink>
        <StyledNavLink to="/login">Log in</StyledNavLink>
      </StyledNav>
    </div>
  );
};

export default AuthNav;
