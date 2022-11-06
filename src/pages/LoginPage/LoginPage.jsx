import { LoginForm } from 'components/LoginForm';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from 'components/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Title from 'components/AuthPageTitle';

export function LoginPage() {
  return (
    <Container
      maxWidth={'sm'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
      }}
    >
      <Box>
        <Avatar
          sx={{
            m: 2,
            width: 48,
            height: 48,
            bgcolor: 'primary.secondary',
          }}
        >
          <LockOutlinedIcon htmlColor="#001e3c" />
        </Avatar>
        <Title component="h1" variant="h4">
          Sign in
        </Title>

        <LoginForm />
      </Box>
    </Container>
  );
}
