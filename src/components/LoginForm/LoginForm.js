import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import { InputControl, SubmitButton } from 'formik-chakra-ui';
import * as Yup from 'yup';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = values => dispatch(logIn(values));

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <Flex align="center" justify="center" h="100%" p={3}>
      <Box p={6} rounded="md" w={80}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <InputControl name="email" label="Email" />
                <InputControl
                  name="password"
                  label="Password"
                  inputProps={{ type: 'password' }}
                />
                <SubmitButton colorScheme="purple" width="full">
                  Login
                </SubmitButton>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default LoginForm;
