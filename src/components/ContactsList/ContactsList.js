import { useSelector } from 'react-redux';
import { ListItem } from '../ListItem/ListItem';
import { ContactsUl } from './contactsList.styled';
import { Loader } from '../Loader/Loader';

const isLoading = state => state.contacts.isLoading;

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
        ? filteredContacts.map(({ id, name, phone }) => (
            <ListItem key={id} id={id} name={name} phone={phone} />
          ))
        : 'Contacts not found :('}
      {isLoading === true && <Loader />}
    </ContactsUl>
  );
};
