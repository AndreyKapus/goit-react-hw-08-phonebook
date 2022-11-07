import { useSelector } from 'react-redux';
import { ListItem } from '../ListItem/ListItem';
import { ContactsUl } from './contactsList.styled';

const getContacts = (items, filter) =>
  items.filter(contact => contact.name.toLowerCase().includes(filter));

export const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filterContacts = getContacts(items, filter);

  const normalizedValue = filter.toLowerCase();
  const filteredContacts = items.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );
  return (
    <ContactsUl>
      {filteredContacts.length
        ? filteredContacts.map(({ id, name, number }) => (
            <ListItem key={id} id={id} name={name} number={number} />
          ))
        : 'Contacts not found :('}
    </ContactsUl>
  );
};
