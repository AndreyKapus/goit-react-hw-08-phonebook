import PropTypes from 'prop-types';
import { ContactsUl, ListItem, ItemButton } from './contactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/contactsSlice';

export const ContactList = ({ contacts, onDeleteContact }) => {
  const dispatch = useDispatch();

  return (
    <ContactsUl>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <ItemButton type="button" onClick={id => dispatch(deleteContact(id))}>
            Delete
          </ItemButton>
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
  onDeleteContact: PropTypes.func.isRequired,
};
