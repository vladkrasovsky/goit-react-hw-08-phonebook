import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { setNameFilter } from 'redux/filters/slice';

const Filter = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setNameFilter(e.target.value));
  };

  // do not show filter without contacts
  if (contacts.length === 0) {
    return null;
  }

  return (
    <>
      <label>Find contacts by name</label>
      <br />
      <input onChange={handleChange} />
    </>
  );
};

export default Filter;
