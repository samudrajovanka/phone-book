import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBodyContainer = styled.div`
  width: calc(100% - 32px);
  max-width: 30rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
