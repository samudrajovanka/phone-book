'use client';

import PropTypes from 'prop-types';

import { ButtonStyle } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  color = 'primary',
  variant = 'solid',
  title,
  onClick,
  isBlock,
  size = 'md',
  disabled,
  isLoading
}) => {
  return (
    <ButtonStyle
      type={type}
      title={title}
      onClick={onClick}
      disabled={isLoading || disabled}
      $isBlock={isBlock}
      $color={color}
      $size={size}
      $variant={variant}
    >
      {isLoading ? 'Loading' : children}
    </ButtonStyle>
  );
};

export default Button;
