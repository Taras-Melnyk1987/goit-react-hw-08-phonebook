import { styled } from '@mui/material/styles';

export const FormField = styled('div')`
  height: 65px;
  :not(:last-child) {
    margin-bottom: ${({ theme: { spacing } }) => spacing(6)};
  }
`;

export const Error = styled('span')`
  color: ${({ theme: { palette } }) => palette.error.main};
`;
