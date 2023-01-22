import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Welcome, {user.name}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => dispatch(logOut())}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
