import styled from '@emotion/styled';

import { default as StarIconBase } from '@/assets/icons/star.svg';

import { FavoriteButtonProps } from './types';

export const ContactContainer = styled.div`
  background-color: #FFFFFF;
  padding: 16px;
  border-radius: 4px;
  transition: box-shadow 0.2s ease-in-out;

  display: flex;
  gap: 2rem;
  justify-content: space-between;
  
  &:hover {
    box-shadow: 0px 10px 15px 0 rgb(225 225 225 / 50%);
  }
`;

export const PhonesContainer = styled.div`
  margin-top: 1rem;
`;

export const PhoneListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 8px 0 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ActionsButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  height: auto;
  cursor: pointer;
  color: ${props => props.$isFavorite ? '#FFC107' : '#C4C4C4'};

  transition: color 0.2s ease-in-out;

  &:hover {
    color: #FFC107;
  }
`;
