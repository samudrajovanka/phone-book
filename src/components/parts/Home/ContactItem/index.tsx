'use client';

import { useState, useEffect, useCallback } from 'react';

import { useMutation } from '@apollo/client';

import StarIcon from '@/assets/icons/star.svg';
import StarSolidIcon from '@/assets/icons/star_solid.svg';
import Button from '@/components/elements/Button';
import Modal from '@/components/elements/Modal';
import Text from '@/components/elements/Text';
import {
  EditProfileForm
} from '@/components/parts/Home'
import type { EditProfileContactForm } from '@/components/parts/Home/EditProfileForm/types';
import { FAVORITE_ID } from '@/constans/storageKey';
import { useContacts } from '@/contexts/contacts';
import { DELETE_CONTACT_BY_PK_QUERY } from '@/queries/contacts';

import {
  ActionsButtonContainer,
  ActionsContainer,
  ContactContainer,
  FavoriteButton,
  PhoneListContainer,
  PhonesContainer
} from './styles';
import type { ContactItemProps } from './types';

const ContactItem: React.FC<ContactItemProps> = ({
  id,
  firstName,
  lastName,
  phones,
  onSuccessDelete,
  onSuccessToggleFavorite
}) => {
  const contactsCtx = useContacts();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShowButtonActions, setIsShowButtonActions] = useState(false);
  const [contactData, setContactData] = useState({
    firstName,
    lastName,
    phones
  });

  const [mutateFunction, { loading: loadingDelete }] = useMutation(DELETE_CONTACT_BY_PK_QUERY);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem(FAVORITE_ID) ?? '[]');

    setIsFavorite(favoriteIds.includes(id));
  }, [id]);

  const handleMouseEnter = useCallback(() => {
    setIsShowButtonActions(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsShowButtonActions(false);
  }, []);

  const hadleDeleteContact = useCallback(() => {
    mutateFunction({
      variables: {
        id
      },
      onCompleted: () => {
        (onSuccessDelete && onSuccessDelete(id));
      }
    });
  }, [mutateFunction, id, onSuccessDelete]);

  const toggleFavorite = useCallback(async () => {
    let newFavoriteIds: string[] = [];

    if (isFavorite) {
      newFavoriteIds = contactsCtx.removeFromFavorite(id);
      setIsFavorite(false);
    } else {
      newFavoriteIds = contactsCtx.addToFavorite(id);
      setIsFavorite(true);
    }

    (onSuccessToggleFavorite && onSuccessToggleFavorite(newFavoriteIds));
  }, [isFavorite, onSuccessToggleFavorite, contactsCtx, id]);

  const handleEditContact = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const handleSuccessUpdateProfile = useCallback((newData: EditProfileContactForm) => {
    setContactData((prev) => ({
      ...prev,
      ...newData
    }));
    setIsOpenModal(false);
  }, []);

  return (
    <>
      <ContactContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <Text fontWeight="medium">
            {contactData.firstName} {contactData.lastName}
          </Text>

          <PhonesContainer>
            <Text color="gray">Phone number</Text>

            <PhoneListContainer>
              {contactData.phones.map((phone, index) => (
                <Text
                  key={`${index}-${phone}`}
                  as="li"
                  color="gray"
                >
                  {phone.number}
                </Text>
              ))}
            </PhoneListContainer>
          </PhonesContainer>

        </div>

        <ActionsContainer>
          <FavoriteButton
            title={`${isFavorite ? 'Unfavorite' : 'Favorite'} ${contactData.firstName} ${contactData.lastName}`}
            onClick={toggleFavorite}
            $isFavorite={isFavorite}
          >
            {isFavorite ? <StarSolidIcon /> : <StarIcon />}
          </FavoriteButton>

          {isShowButtonActions ? (
            <ActionsButtonContainer>
              <Button
                variant="outline"
                color="warning"
                disabled={loadingDelete}
                onClick={handleEditContact}
              >
                Edit
              </Button>
              <Button
                variant="outline"
                color="error"
                onClick={hadleDeleteContact}
                isLoading={loadingDelete}
              >
                Delete
              </Button>
            </ActionsButtonContainer>
          ) : null}
        </ActionsContainer>
      </ContactContainer>

      <Modal
        isOpen={isOpenModal}
        title="Edit Contact"
        onClose={handleCloseModal}
      >
        <EditProfileForm
          id={id}
          firstName={contactData.firstName}
          lastName={contactData.lastName}
          onSuccess={handleSuccessUpdateProfile}
        />
      </Modal>
    </>
  );
};

export default ContactItem;
