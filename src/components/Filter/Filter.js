import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from '../Redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        onChange={e => dispatch(filterItems(e.currentTarget.value))}
        value={filter}
      ></input>
    </div>
  );
};
