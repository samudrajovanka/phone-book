import styled from '@emotion/styled';

import { TextStyleProps } from './types';

const getColor = (props: TextStyleProps) => {
  return `var(--color-${props.$color})`;
};

const getFontSize = (props: TextStyleProps) => {
  let textFontSize = '';

  switch(props.$typography) {
    case 'sm':
      textFontSize = '14px';
      break;
    case 'lg':
      textFontSize = '24px';
      break;
    default:
      // md
      textFontSize = '16px';
      break;
  }

  return textFontSize;
};

const getFontWeight = (props: TextStyleProps) => {
  let textFontWeight = '';

  switch(props.$fontWeight) {
    case 'medium':
      textFontWeight = '500';
      break;
    case 'bold':
      textFontWeight = '700';
      break;
    default:
      // normal
      textFontWeight = '400';
      break;
  }

  return textFontWeight;
};

export const TextStyle = styled.p<TextStyleProps>`
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getColor};
`;
