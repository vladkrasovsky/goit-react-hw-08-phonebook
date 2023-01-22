import { Helmet } from 'react-helmet-async';
import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Helmet>
        <title>Welcome to Phonebook</title>
      </Helmet>

      <Flex align="center" justify="center" h="100%" p={3}>
        <Box maxW="32rem" m="20px auto">
          <Heading mb={4}>Welcome to Phonebook</Heading>
          <Text fontSize="xl">Quickly save and manage your contacts 😉</Text>

          {!isLoggedIn && (
            <Button
              as={NavLink}
              to="/register"
              size="lg"
              colorScheme="purple"
              mt="24px"
            >
              Create a free account
            </Button>
          )}

          {isLoggedIn && (
            <Button
              as={NavLink}
              to="/contacts"
              size="lg"
              colorScheme="purple"
              mt="24px"
            >
              Manage your contacts
            </Button>
          )}
        </Box>
      </Flex>
    </>
  );
}
