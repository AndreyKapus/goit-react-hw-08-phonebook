import { useSelector } from 'react-redux';
import { ListItem } from '../ListItem';
import { ContactsUl } from './contactsList.styled';

const getContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getContacts(items, filter);
  return (
    <ContactsUl>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <ListItem key={id} id={id} name={name} number={number} />
          ))
        : 'Contacts not found :('}
    </ContactsUl>
  );
};
