import useAuth from 'hooks/useHook';

const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome {user.name}</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
