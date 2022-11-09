// import { ContactForm } from './ContactsForm/ContactsForm';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { ToastContainer } from 'react-toastify';
import { Home } from 'pages/ContactsPage';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
