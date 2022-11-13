// import { ContactForm } from './ContactsForm/ContactsForm';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { ToastContainer } from 'react-toastify';
import { Home } from 'pages/ContactsPage';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from 'pages/RegisterPage';
import LogInForm from 'pages/LogInPage';
import Layout from 'Layout/Layout';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LogInForm />} />
        </Route>
      </Routes>
    </div>
  );
}
