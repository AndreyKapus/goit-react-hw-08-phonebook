import { Home } from 'pages/ContactsPage/ContactsPage';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from 'pages/RegisterPage/RegisterPage';
import LogInForm from 'pages/LoginPage/LogInPage';
import Layout from 'Layout/Layout';
import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { useEffect } from 'react';
import ErrorPage from '../pages/PageNotFound/PageNotFound';
import useAuth from 'hooks/useHook';
import { refreshUser } from './Redux/contactsOperations';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute component={RegisterForm} redirectTo={'/'} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LogInForm} redirectTo={'/'} />
              }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    )
  );
}
