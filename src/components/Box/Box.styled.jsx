import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContentBox = styled(Box)`
  /* position: absolute;
  top: 50%;

  transform: translateY(-50%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding-top: 50px;
  padding-bottom: 50px;
  text-transform: capitalize;
`;

export default ContentBox;
