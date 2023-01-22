import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppBar />
      <Box p={4}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Box>
      <Box
        as="p"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mt="auto"
        color="gray.500"
        p={4}
        minH="56px"
      >
        Copyright &copy; {new Date().getFullYear()} GoIT. Created by
        Vlad&nbsp;Krasovsky.
      </Box>
    </Box>
  );
};
