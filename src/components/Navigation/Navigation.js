import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link } from '@chakra-ui/react';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const activeLinkStyle = { fontWeight: 'bold' };

  return (
    <nav>
      <Link as={NavLink} to="/" mr={3} _activeLink={activeLinkStyle}>
        Home
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} to="/contacts" _activeLink={activeLinkStyle}>
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
