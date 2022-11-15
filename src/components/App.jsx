// import { ContactForm } from './ContactsForm/ContactsForm';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { ToastContainer } from 'react-toastify';
import { Home } from 'pages/ContactsPage';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from 'pages/RegisterPage';
import LogInForm from 'pages/LogInPage';
import Layout from 'Layout/Layout';
import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { useEffect } from 'react';
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
        </Routes>
      </div>
    )
  );
}
