import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { styled } from '@mui/material/styles';

export const AuthNavBox = styled(Box)`
  display: flex;
`;
export const AuthNavLink = styled(NavLink)`
  color: ${({ theme: { palette } }) => palette.secondary.main};
  text-decoration: none;

  :not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    color: ${({ theme: { palette } }) => palette.text.primary};
  }
`;
export const AuthNavDivider = styled(Divider)`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
