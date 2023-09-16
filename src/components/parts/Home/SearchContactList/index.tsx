'use client';

import {
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';

import {
  ContactItem,
  SkeletonContact
} from '@/components/parts/Home';
import Text from '@/components/elements/Text';
import { useContacts } from '@/contexts/contacts';
import { useSearchContact } from '@/contexts/searchContact';

import { ContactListContainer } from './styles';

const SearchContactList = () => {
  const contactsCtx = useContacts();
  const searchContactCtx = useSearchContact();

  const contactsLength = useMemo(() => {
    return contactsCtx.contacts.data?.contact.length;
  }, [contactsCtx.contacts.data?.contact.length]);
  
  const handleSuccessDelete = useCallback(() => {
    contactsCtx.contacts.refetch({
      where: {
        _or: [
          {
            first_name: {
              _ilike: `%${searchContactCtx.query.name}%`
            }
          },
          {
            last_name: {
              _ilike: `%${searchContactCtx.query.name}%`
            }
          }
        ]
      }
    });
  }, [contactsCtx, searchContactCtx.query.name]);

  return (
    <div>
      <Text fontWeight="medium">Contacts</Text>

      <ContactListContainer>
        {searchContactCtx.isSearching ? (
          <>
            {Array.from(Array(4).keys()).map((_, index) => (
              <SkeletonContact key={index} />
            ))}
          </>
        ) : (
          <>
            {contactsLength ? (
              <>
                {contactsCtx.contacts.data?.contact.map((contact) => (
                  <ContactItem
                    key={contact.id}
                    id={contact.id}
                    firstName={contact.first_name}
                    lastName={contact.last_name}
                    phones={contact.phones}
                    onSuccessDelete={handleSuccessDelete}
                  />
                ))}
              </>
            ) : (
              <Text typography="sm">Contact not found. Try to another name.</Text>
            )}
            
          </>
        )}
      </ContactListContainer>
    </div>
  );
};

export default SearchContactList;
