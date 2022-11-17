import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ItemButton, ListItems } from '../ContactsList/contactsList.styled';
import { deleteItem } from '../Redux/contactsOperations';
import { AiOutlineClose } from 'react-icons/ai';

export const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContacts = id => {
    dispatch(deleteItem(id));
  };

  return (
    <ListItems id={id}>
      <ItemButton onClick={() => deleteContacts(id)}>
        <AiOutlineClose />
      </ItemButton>
      {name}: {number}
    </ListItems>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
