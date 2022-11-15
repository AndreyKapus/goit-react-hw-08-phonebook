import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ItemButton, ListItems } from '../ContactsList/contactsList.styled';
import { deleteItem } from '../Redux/contactsOperations';

export const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContacts = id => dispatch(deleteItem(id));

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
