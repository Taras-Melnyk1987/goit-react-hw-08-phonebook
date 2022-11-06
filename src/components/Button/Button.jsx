import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomizedButton = styled(Button)(`
  color: ${({ theme: { palette } }) => palette.primary.main};
  outline-color: ${({ theme: { palette } }) => palette.primary.main};
`);

export default function StyledComponents({ children, onClick }) {
  return (
    <CustomizedButton
      children={children}
      variant="outlined"
      onClick={onClick}
    />
  );
}

CustomizedButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};
