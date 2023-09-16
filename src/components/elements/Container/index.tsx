'use client';

import { ContainerStyle } from './styles';
import { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = ({
  children,
  className
}) => {
  return (
    <ContainerStyle className={className}>
      {children}
    </ContainerStyle>
  );
};

export default Container;
