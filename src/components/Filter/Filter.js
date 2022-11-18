import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from '../Redux/contactsSlice';
import { StyledFilterTittle } from './Filter.styled';
import { StyledInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <div>
      <StyledFilterTittle>Find contacts by name</StyledFilterTittle>
      <StyledInput
        onChange={e => dispatch(filterItems(e.currentTarget.value))}
        value={filter}
      ></StyledInput>
    </div>
  );
};

export default Filter;
