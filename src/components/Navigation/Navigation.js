import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Box, Link } from '@chakra-ui/react';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const activeLinkStyle = { fontWeight: 'bold' };

  return (
    <Box as="nav" display="flex" gap={3}>
      <Link as={NavLink} to="/" _activeLink={activeLinkStyle}>
        Home
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} to="/contacts" _activeLink={activeLinkStyle}>
          Contacts
        </Link>
      )}
    </Box>
  );
};

export default Navigation;
