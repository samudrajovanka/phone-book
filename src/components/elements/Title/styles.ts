import styled from '@emotion/styled';

import Text from '@/components/elements/Text';

export const TitleStyle = styled(Text)`
  position: relative;
  z-index: 1;
  display: inline-block;
`;

export const TitleContainerStyle = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 75%;
    height: 4px;
    border-radius: 4px;
    background-color: var(--color-primary);
  }
`;
