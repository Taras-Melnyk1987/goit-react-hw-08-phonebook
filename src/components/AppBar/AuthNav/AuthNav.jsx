import { AuthNavLink, AuthNavBox, AuthNavDivider } from './AuthNav.styles';

export const AuthNav = () => {
  return (
    <AuthNavBox>
      <AuthNavLink to="/register">Sign Up</AuthNavLink>
      <AuthNavDivider orientation="vertical" flexItem />
      <AuthNavLink to="/login">Sign In</AuthNavLink>
    </AuthNavBox>
  );
};
