import { NavLink, useLocation } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

const navItems = [
  { href: '/register', text: 'Register' },
  { href: '/login', text: 'Log In' },
];

const AuthNav = () => {
  const location = useLocation();

  return (
    <nav>
      {navItems.map(
        ({ href, text }) =>
          href !== location.pathname && (
            <Link as={NavLink} to={href} key={href} ml={3}>
              {text}
            </Link>
          )
      )}
    </nav>
  );
};

export default AuthNav;
