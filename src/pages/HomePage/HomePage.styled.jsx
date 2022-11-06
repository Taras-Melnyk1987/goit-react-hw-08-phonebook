import { styled } from '@mui/material/styles';

const Header = styled('header')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${({ theme: { palette } }) => palette.common.dark};
`;

const Title = styled('h1')`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 64px;
`;

const Text = styled('p')`
  margin-bottom: ${({ theme: { spacing } }) => spacing(6)};
  color: ${({ theme: { palette } }) => palette.text.secondary};
`;

export { Header, Title, Text };
