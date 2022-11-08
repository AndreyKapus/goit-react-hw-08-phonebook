import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div>
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
}
