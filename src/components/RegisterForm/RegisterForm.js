import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import { InputControl, SubmitButton } from 'formik-chakra-ui';
import * as Yup from 'yup';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = values => dispatch(register(values));

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(5, 'Password must contain at least 7 characters')
      .required(),
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
            <form onSubmit={handleSubmit} autoComplete="off">
              <VStack spacing={4} align="flex-start">
                <InputControl name="name" label="Name" />
                <InputControl name="email" label="Email" />
                <InputControl
                  name="password"
                  label="Password"
                  inputProps={{ type: 'password' }}
                />
                <SubmitButton colorScheme="purple" width="full">
                  Signup
                </SubmitButton>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
