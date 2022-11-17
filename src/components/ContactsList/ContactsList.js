import { useSelector } from 'react-redux';
import { ListItem } from '../ListItem/ListItem';
import { ContactsUl, StyledContactsTittle } from './contactsList.styled';
import { Loader } from '../Loader/Loader';

const isLoading = state => state.contacts.isLoading;

const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const normalizedValue = filter.toLowerCase();
  const filteredContacts = items.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );

  return (
    <ContactsUl>
      <StyledContactsTittle>Contacts</StyledContactsTittle>
      {filteredContacts.length
        ? filteredContacts.map(({ id, name, number }) => (
            <ListItem key={id} id={id} name={name} number={number} />
          ))
        : 'Contacts not found :('}
      {isLoading === true && <Loader />}
    </ContactsUl>
  );
};

export default ContactsList;
