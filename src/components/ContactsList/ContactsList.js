import PropTypes from 'prop-types';
import { ContactsUl, ListItem, ItemButton } from './contactsList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsUl>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <ItemButton type="button" onClick={() => onDeleteContact(id)}>
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
