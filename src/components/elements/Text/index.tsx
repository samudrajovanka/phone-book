'use client';

import { TextStyle } from './styles';
import { TextProps } from './types';

const Text: React.FC<TextProps> = ({
  as = 'p',
  children,
  color = 'black',
  fontWeight = 'normal',
  typography = 'md',
  className
}) => {
  return (
    <TextStyle
      as={as}
      className={className}
      $color={color}
      $fontWeight={fontWeight}
      $typography={typography}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
