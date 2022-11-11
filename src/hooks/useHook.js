import { useSelector } from 'react-redux';
import {
  selectIsLogedIn,
  selectUser,
  selectIsRefreshing,
} from 'components/Redux/selectors';

const useAuth = () => {
  return {
    islogedIn: useSelector(selectIsLogedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};
