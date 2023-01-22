import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(id));
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Heading size="xs" textTransform="uppercase">
          {name}
        </Heading>
        <Text pt="1" fontSize="sm">
          {number}
        </Text>
      </Box>
      <Button
        colorScheme="red"
        variant="outline"
        size="xs"
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </Box>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
