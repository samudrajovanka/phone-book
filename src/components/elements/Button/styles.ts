import styled from '@emotion/styled';

import { ButtonStyleProps } from './types';

const backgroundColor = (props: ButtonStyleProps) => {
  if (props.$variant !== 'solid') {
    return 'transparent';
  }

  return `var(--color-${props.$color})`;
};

const color = (props: ButtonStyleProps) => {
  let textColor = '';

  if (props.$variant === 'outline') {
    return `var(--color-${props.$color})`;
  }

  switch (props.$color) {
    case 'primary':
      textColor = 'var(--color-white)';
      break;
    default:
      textColor = 'var(--color-black)';
  }

  return textColor;
}

const getHeight = (props: ButtonStyleProps) => {
  let buttonHeight = '';

  switch (props.$size) {
    case 'lg':
      buttonHeight = '60px';
      break;
    default:
      // md
      buttonHeight = '40px';
  }

  return buttonHeight;
};

const getFontSize = (props: ButtonStyleProps) => {
  let textFontSize = '';

  switch (props.$size) {
    case 'lg':
      textFontSize = '18px';
      break;
    default:
      // md
      textFontSize = '14px';
  }

  return textFontSize;
};

const getPadding = (props: ButtonStyleProps) => {
  let buttonPadding = '';

  switch (props.$variant) {
    default:
      // primary
      buttonPadding = '0 16px';
  }

  return buttonPadding;
};

const getBorder = (props: ButtonStyleProps) => {
  let border = '';

  if (props.$variant !== 'outline') {
    return 'none'
  };

  border = `1px solid var(--color-${props.$color})`;

  return border;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  outline: none;
  background-color: ${backgroundColor};
  color: ${color};
  min-height: 40px;
  cursor: pointer;
  border: ${getBorder};
  border-radius: 4px;

  font-size: 14px;
  font-weight: 500;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  
  width: ${(props) => props.$isBlock ? '100%' : undefined};
  height: ${getHeight};
  font-size: ${getFontSize};
  padding: ${getPadding};

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: contrast(1.2)
  }

  &:focus {
    outline: var(--ring);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
