import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { LogoLink } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const ResponsiveAppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <AppBar position="sticky" component="header">
      <Container maxWidth={'sm'}>
        <Toolbar disableGutters aria-label="ToolBar">
          <LogoLink aria-label="Logo" to="/">
            Phonebook
          </LogoLink>
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
