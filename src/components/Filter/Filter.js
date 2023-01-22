import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { setNameFilter } from 'redux/filters/slice';
import { Box, Input } from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';

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
    <Box my={5}>
      <FormLabel htmlFor="nameFilter">Find contacts by name</FormLabel>
      <Input
        id="nameFilter"
        name="name"
        label="Email"
        onChange={handleChange}
        autoComplete="off"
        type="search"
      />
    </Box>
  );
};

export default Filter;
