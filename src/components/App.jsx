import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

// https://63640ed18a3337d9a2f052f2.mockapi.io/contacts/:endpoint

export default function App() {
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
}
