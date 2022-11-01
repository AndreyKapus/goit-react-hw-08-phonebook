import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../Redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const onChange = element => {
    dispatch(filterContacts(element.currentTarget.value));
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input onChange={onChange} value={filter}></input>
    </div>
  );
};
