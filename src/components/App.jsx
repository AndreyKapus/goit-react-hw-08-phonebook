import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

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
