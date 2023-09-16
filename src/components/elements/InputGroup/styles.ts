import styled from '@emotion/styled';

import { InputGroupStyleProps } from './types';

export const InputGroupStyle = styled.div<InputGroupStyleProps>`
  width: ${(props) => props.$isBlock ? '100%' : undefined};
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ErrorLabel = styled.p`
  color: var(--color-error);
  font-size: 12px;
  margin-top: 4px;
`;
