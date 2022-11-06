import { styled } from '@mui/material/styles';

export const UserLogin = styled('span')`
  color: ${({ theme: { palette } }) => palette.secondary.main};
  @media (max-width: 600px) {
    display: none;
  }
`;
