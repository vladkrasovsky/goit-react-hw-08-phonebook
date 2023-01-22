import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactList';
import Filter from 'components/Filter';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Grid,
  GridItem,
  Spinner,
} from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <Grid templateColumns="repeat(auto-fill, minmax(320px, 1fr))" gap={4}>
        <GridItem>
          <Card pos="sticky" top="1rem">
            <CardHeader>
              <Heading size="md">New contact</Heading>
            </CardHeader>
            <CardBody pt={0}>
              <ContactForm />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem>
          <Card minH="100%">
            <CardHeader pb={0}>
              <Heading size="md" display="flex" alignItems="center">
                Contacts ({contacts.length}){' '}
                {isLoading && <Spinner size="sm" color="purple.500" ml={2} />}
              </Heading>
            </CardHeader>

            <CardBody pt={0}>
              <Filter />
              <ContactsList />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}
