import { useDispatch } from 'react-redux';
import { deleteContact } from './Redux/contactsSlice';

export const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const deleteContacts = id => dispatch(deleteContact(id));

  return (
    <button type="button" onClick={() => deleteContacts(id)}>
      Delete
    </button>
  );
};
