import { logOut } from 'components/Redux/contactsOperations';
import useAuth from 'hooks/useHook';
import { useDispatch } from 'react-redux';
import { StyledUserBox, Greetengs, LogOutButton } from './UserMenu.styled';
import { FaRegHandPeace } from 'react-icons/fa';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <StyledUserBox>
      <Greetengs>
        Welcome{' '}
        <span>
          {user.name} <FaRegHandPeace />
        </span>
      </Greetengs>
      <LogOutButton type="button" onClick={handleLogOut}>
        Logout{' '}
      </LogOutButton>
    </StyledUserBox>
  );
};

export default UserMenu;
