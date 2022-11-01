import PropTypes from 'prop-types';
import { ContactsUl, ListItem, ItemButton } from './contactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../Redux/contactsSlice';
import { DeleteButton } from '../DeleteButton';

const getContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  // const dispatch = useDispatch();

  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getContacts(items, filter);

  // const deleteContact = id => dispatch(deleteContact(id));

  return (
    <ContactsUl>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <DeleteButton />
        </ListItem>
      ))}
    </ContactsUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
