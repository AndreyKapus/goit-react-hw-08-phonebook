import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from './Redux/contactsSlice';
import {
  ItemButton,
  ListItems,
} from '../components/ContactsList/contactsList.styled';

export const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContacts = id => dispatch(deleteContact(id));

  return (
    <ListItems id={id}>
      {name}: {number}
      <ItemButton onClick={() => deleteContacts(id)}>Delete</ItemButton>
    </ListItems>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
