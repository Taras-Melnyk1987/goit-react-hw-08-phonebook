import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  color: ${({ theme: { palette } }) => palette.text.secondary};
`;

export const LogoLink = styled(Link)`
  flex-grow: 1;
  text-decoration: none;
  color: ${({ theme: { palette } }) => palette.secondary.main};
  font-size: 32px;
  font-weight: ${({ theme: { typography } }) => typography.fontWeightBold};
`;
