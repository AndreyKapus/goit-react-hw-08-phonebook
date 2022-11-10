import ContactForm from 'components/ContactsForm/ContactsForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList';
import { ToastContainer } from 'react-toastify';
import Navigation from 'components/Navigation/Navigation';

export const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>PhoneBook</h1>
      <ContactForm />
      <Filter />
      <ContactsList />
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
