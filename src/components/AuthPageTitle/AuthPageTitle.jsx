import { Title } from './AuthPageTitle.styled';

const AuthPageTitle = ({ children }) => (
  <Title component="h1" variant="h4">
    {children}
  </Title>
);

export default AuthPageTitle;
