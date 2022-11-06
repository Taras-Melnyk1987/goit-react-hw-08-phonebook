import { styled } from '@mui/material/styles';

export const FooterText = styled('p')`
  text-align: center;
`;

export const StyledFooter = styled('footer')`
  display: flex;
  justify-content: center;
`;

export const Link = styled('a')`
  color: ${({ theme: { palette } }) => palette.primary.main};
  text-decoration: none;
`;
