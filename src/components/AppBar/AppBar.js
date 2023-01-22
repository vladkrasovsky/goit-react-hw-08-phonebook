import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';
import { useColorMode, Box, IconButton, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="header"
      shadow="0 0 3px rgba(0,0,0,0.3)"
      py={2}
      px={4}
      minH="56px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      <Tooltip
        placement="bottom-start"
        label={`Switch between dark and light mode (currently using ${
          colorMode.charAt(0).toUpperCase() + colorMode.slice(1)
        } mode)`}
      >
        <IconButton
          onClick={toggleColorMode}
          aria-label="Toggle theme"
          icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
        />
      </Tooltip>
    </Box>
  );
};

export default AppBar;
