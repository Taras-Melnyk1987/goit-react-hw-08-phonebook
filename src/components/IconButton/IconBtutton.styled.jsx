import { styled } from '@mui/material/styles';

const IconButtonStyle = styled('button')`
  margin-left: ${({ theme: { spacing } }) => spacing(1)};
  border: none;
  border-radius: ${({ theme: { shape } }) => `${shape.borderRadius}px`};
  outline: none;
  padding: ${({ theme: { spacing } }) => spacing(1)};
  background-color: ${({ background, theme: { palette } }) => {
    const newBackgroundColor = createColor(background, palette);
    return background ? newBackgroundColor : 'transparent';
  }};
  color: ${({ background, color, theme: { palette } }) => {
    const newColor = createColor(color, palette);
    return background ? palette.primary.secondary : newColor;
  }};
  & svg {
    display: block;
  }

  &:hover {
    background-color: ${({ background, color, theme: { palette } }) =>
      background || color ? palette.background.default : 'transparent'};
    outline: 1px solid
      ${({ background, theme: { palette } }) => {
        const newBackgroundColor = createColor(background, palette);
        return background ? newBackgroundColor : 'none';
      }};
    color: ${({ background, color, theme: { palette } }) => {
      const newBackgroundColor = createColor(background, palette);
      const newIconColor = createColor(color, palette);
      return background ? newBackgroundColor : newIconColor;
    }};
  }
`;

export { IconButtonStyle };

function createColor(colorOptions, colorSet) {
  if (!colorOptions) {
    return;
  }
  const optionsArray = colorOptions.split('.');
  const firstColorProperty = `${optionsArray[0]}`;
  const secondColorProperty = `${optionsArray[1]}`;

  return colorSet[firstColorProperty][secondColorProperty];
}
