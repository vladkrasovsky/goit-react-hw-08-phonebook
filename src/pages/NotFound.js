import { Helmet } from 'react-helmet-async';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        maxW="32rem"
        m="20px auto"
        rounded="lg"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Page not found!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for using our application. Please, try to change your query.
        </AlertDescription>
      </Alert>
    </>
  );
}
