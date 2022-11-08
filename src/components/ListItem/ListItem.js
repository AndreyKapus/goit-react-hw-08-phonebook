import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from '../Redux/contactsSlice';
import { ItemButton, ListItems } from '../ContactsList/contactsList.styled';
import { deleteItem } from '../Redux/contactsOperations';
import { Loader } from 'components/Loader/Loader';

export const ListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const deleteContacts = id => dispatch(deleteItem(id));
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <ListItems id={id}>
      {name}: {phone}
      <ItemButton onClick={() => deleteContacts(id)}>Delete</ItemButton>
    </ListItems>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
