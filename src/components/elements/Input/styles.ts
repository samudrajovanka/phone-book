import styled from '@emotion/styled';

export const InputStyle = styled.input`
  outline: none;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  width: 100%;
  padding: 10px 16px;

  &:focus {
    outline: var(--ring);
  }
`;