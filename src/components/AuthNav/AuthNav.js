import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/register">Sign up</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
