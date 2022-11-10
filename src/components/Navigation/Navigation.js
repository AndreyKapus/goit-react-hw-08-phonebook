import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/register">Sign up</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
