import { NavLink, useLocation } from 'react-router-dom';
import { Box, Link } from '@chakra-ui/react';

const navItems = [
  { href: '/register', text: 'Register' },
  { href: '/login', text: 'Log In' },
];

const AuthNav = () => {
  const location = useLocation();

  return (
    <Box as="nav" display="flex" gap={3}>
      {navItems.map(
        ({ href, text }) =>
          href !== location.pathname && (
            <Link as={NavLink} to={href} key={href}>
              {text}
            </Link>
          )
      )}
    </Box>
  );
};

export default AuthNav;
