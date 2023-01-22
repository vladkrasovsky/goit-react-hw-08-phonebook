import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { VStack, useToast } from '@chakra-ui/react';
import { Formik } from 'formik';
import { InputControl, SubmitButton } from 'formik-chakra-ui';
import * as Yup from 'yup';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const initialValues = {
    name: '',
    number: '',
  };

  const checkIsInContacts = newName =>
    contacts.some(
      ({ name }) => name.toLowerCase() === newName.toLowerCase().trim()
    );

  const onSubmit = async (values, { resetForm }) => {
    const { name } = values;
    const isInContacts = checkIsInContacts(name);

    // don't add new contact when the name already exists
    if (isInContacts) {
      toast({
        title: 'Failed to create new contact.',
        description: `"${name}" is already in your contacts.`,
        status: 'warning',
        isClosable: true,
        position: 'bottom-right',
      });
      return false;
    }

    const { meta: res } = await dispatch(addContact(values));
    const isSuccess = res.requestStatus === 'fulfilled';

    if (isSuccess) {
      resetForm();
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
    number: Yup.string()
      .trim()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <InputControl name="name" label="Name" />
            <InputControl
              name="number"
              label="Number"
              inputProps={{ type: 'tel' }}
            />
            <SubmitButton colorScheme="purple" width="full">
              Add contact
            </SubmitButton>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
