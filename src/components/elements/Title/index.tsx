'use client';

import { TitleStyle, TitleContainerStyle } from './styles';
import { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({
  children,
  as = 'h1',
  typography = "lg"
}) => {
  return (
    <TitleContainerStyle>
      <TitleStyle as={as} fontWeight="bold" typography={typography}>
        {children}
      </TitleStyle>
    </TitleContainerStyle>
  );
};

export default Title;
