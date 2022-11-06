import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const Title = styled(Typography)`
  color: ${({ theme: { palette } }) => palette.text.primary};
  font-weight: ${({ theme: { typography } }) => typography.fontWeightRegular};
  margin-bottom: 25px;
`;
