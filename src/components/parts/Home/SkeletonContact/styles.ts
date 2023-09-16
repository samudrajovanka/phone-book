import styled from '@emotion/styled';

import {
  ContactContainer as ContactContainerBase,
} from '@/components/parts/Home/ContactItem/styles';

import { SkeletonProps } from './types';

export const ContactContainer = styled(ContactContainerBase)`
  &:hover {
    box-shadow: none;
  }
`;

export const Skeleton = styled.div<SkeletonProps>`
  background-color: #eeeeee;
  height: 1rem;
  width: ${props => props.$width || '100%'};
  margin-top: ${props => props.$marginTop || undefined};
  border-radius: 4px;
`;
