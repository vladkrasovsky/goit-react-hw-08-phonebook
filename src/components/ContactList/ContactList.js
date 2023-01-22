import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import Contact from 'components/Contact';
import { Stack, StackDivider } from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <Stack divider={<StackDivider />} spacing="4">
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </Stack>
  );
};

export default ContactList;
