import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useHook';
import AuthNav from '../AuthNav/AuthNav';
import { StyledHeader } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <StyledHeader>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledHeader>
    </div>
  );
};

export default AppBar;
