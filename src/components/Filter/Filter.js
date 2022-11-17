import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from '../Redux/contactsSlice';
import { StyledFilterTittle } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <div>
      <StyledFilterTittle>Find contacts by name</StyledFilterTittle>
      <input
        onChange={e => dispatch(filterItems(e.currentTarget.value))}
        value={filter}
      ></input>
    </div>
  );
};

export default Filter;
