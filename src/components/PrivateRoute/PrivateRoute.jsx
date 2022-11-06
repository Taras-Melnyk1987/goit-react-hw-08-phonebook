import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(state => state.phonebook.auth.token);
  return token ? children : <Navigate to={redirectTo} />;
};
