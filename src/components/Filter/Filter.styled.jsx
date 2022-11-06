import { styled } from '@mui/material/styles';

const FilterWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding-top: ${({ theme: { spacing } }) => spacing(0)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(1)};
`;

const Input = styled('input')`
  padding: ${({ theme: { spacing } }) => spacing(1)};
  border-radius: ${({ theme: { shape } }) => `${shape.borderRadius}px`};
  &:focus,
  &:hover {
    outline-color: ${({ theme: { palette } }) => palette.primary.main};
  }
`;

export { FilterWrapper, Input };
