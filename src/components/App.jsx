import { useState } from 'react';
import shortid from 'shortid';
import useLocalStorage from '../hooks/useLocaleStorege';
import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export default function App() {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useLocalStorage('contacts', [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  // const addContact = ({ contactName, contactNumber }) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name: contactName,
  //     number: contactNumber,
  //   };

  //   setContacts(prevContacts => [contact, ...prevContacts]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const changeFilter = evt => {
  //   setFilter(evt.currentTarget.value);
  // };

  // const getVisibleContact = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <div>
      <h1>PhoneBook</h1>

      <ContactForm />
      <Filter />
      <ContactList />
      {/* <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContact()}
        onDeleteContact={deleteContact}
      /> */}
    </div>
  );
}
