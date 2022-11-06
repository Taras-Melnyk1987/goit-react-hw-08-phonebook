import { styled } from '@mui/material/styles';

const MainContainer = styled('main')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 2;

  background-color: ${({ theme: { palette } }) => palette.background.default};
`;

export default MainContainer;
