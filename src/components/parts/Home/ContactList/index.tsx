'use client';

import {
  FavoriteContactList,
  RegularContactList,
  SearchContactList
} from '@/components/parts/Home';
import { useContacts } from '@/contexts/contacts';
import { useSearchContact } from '@/contexts/searchContact';

import { Divider, MainContainer } from './styles';

const ContactList = () => {
  const { favoriteContacts } = useContacts();
  const { query } = useSearchContact();

  return (
    <MainContainer>
      {query.name ? (
        <SearchContactList />
      ) : (
        <>
          {favoriteContacts.data?.contact.length ? (
            <>
              <FavoriteContactList />

              <Divider />
            </>
          ) : null}

          <RegularContactList />
        </>
      )}
    </MainContainer>
  );
};

export default ContactList;
