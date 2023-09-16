import styled from '@emotion/styled';
import Link from 'next/link';

export const ContactListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-block: 1rem;
`;

export const LinkCreate = styled(Link)`
  color: var(--color-primary);
  text-decoration: underline;
`;
