import { logOut } from 'components/Redux/contactsOperations';
import useAuth from 'hooks/useHook';
import { useDispatch } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>
        Welcome <span>{user.name}</span>
      </p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
