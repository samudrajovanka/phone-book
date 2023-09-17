'use client';

import {
  useState,
  useEffect,
  useCallback
} from 'react';

import Text from '@/components/elements/Text';
import {
  ContactItem
} from '@/components/parts/Home';
import { useContacts } from '@/contexts/contacts';

import { ContactListContainer } from './styles';

const FavoriteContactList = () => {
  const contactsCtx = useContacts();

  const handleSuccessDelete = useCallback((id: string) => {
    contactsCtx.favoriteContacts.refetch(contactsCtx.favoriteIds);
    contactsCtx.removeFromFavorite(id);
  }, [contactsCtx]);

  const handleSuccessToggleFavorite = useCallback(async (newFavoriteIds: string[]) => {
    await contactsCtx.regularContacts.refetch(newFavoriteIds);
    await contactsCtx.favoriteContacts.refetch(newFavoriteIds);
  }, [contactsCtx.favoriteContacts, contactsCtx.regularContacts]);

  return (
    <div>
      <Text as="h2" fontWeight="medium">Favorite Contact</Text>

      <ContactListContainer>
        {contactsCtx.favoriteContacts.data?.contact.map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phones={contact.phones}
            onSuccessDelete={handleSuccessDelete}
            onSuccessToggleFavorite={
              (newFavoritedIds) => handleSuccessToggleFavorite(newFavoritedIds)
            }
          />
        ))}
      </ContactListContainer>
    </div>
  );
};

export default FavoriteContactList;
