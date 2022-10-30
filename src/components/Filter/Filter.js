import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../Redux/contactsSlice';
import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const onChange = element => {
    dispatch(filterContacts(element.currentTarget.value));
  };
  return (
    <label>
      Filter by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
