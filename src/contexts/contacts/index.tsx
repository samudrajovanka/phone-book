'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';

import { useQuery } from '@apollo/client';

import { FAVORITE_ID } from '@/constans/storageKey';
import {
  GET_CONTACT_LIST_QUERY,
  GET_CONTACT_LIST_DEFAULT_VARIABLES
} from '@/queries/contacts';
import { GetContactsResponse } from '@/queries/contacts/types';

import type {
  ContactsContextValue,
  ContactsResult
} from './types';

const ContactsContext = createContext<ContactsContextValue>({} as ContactsContextValue);

const DEFAULT_CONTACTS_RESULT: ContactsResult = {
  data: undefined,
  loading: true
};

const ContactsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [favoriteContactsResult, setFavoriteContactsResult] = useState<ContactsResult>(DEFAULT_CONTACTS_RESULT)
  const [regularContactsResult, setRegularContactsResult] = useState<ContactsResult>(DEFAULT_CONTACTS_RESULT);
  const [contactsResult, setContactsResult] = useState<ContactsResult>(DEFAULT_CONTACTS_RESULT);

  const favoriteContacts = useQuery<GetContactsResponse>(GET_CONTACT_LIST_QUERY, {
    variables: {
      ...GET_CONTACT_LIST_DEFAULT_VARIABLES,
      where: {
        id: {
          _in: favoriteIds
        }
      }
    },
    skip: true
  });

  const regularContacts = useQuery<GetContactsResponse>(GET_CONTACT_LIST_QUERY, {
    variables: {
      ...GET_CONTACT_LIST_DEFAULT_VARIABLES,
      limit: 10,
      where: {
        _not: {
          id: {
            _in: favoriteIds
          }
        }
      }
    },
    skip: true
  });

  const contacts = useQuery<GetContactsResponse>(GET_CONTACT_LIST_QUERY, {
    variables: {
      ...GET_CONTACT_LIST_DEFAULT_VARIABLES,
      limit: 10
    },
    skip: true
  });

  const refetchFavoriteContacts: ContactsContextValue['favoriteContacts']['refetch'] = useCallback(async (
    favoriteIds,
    variables
  ) => {
    setFavoriteContactsResult((prev) => ({
      ...prev,
      loading: true
    }));

    const { data } = await favoriteContacts.refetch({
      ...GET_CONTACT_LIST_DEFAULT_VARIABLES,
      ...variables,
      where: {
        id: {
          _in: favoriteIds
        }
      }
    });

    setFavoriteContactsResult((prev) => ({
      ...prev,
      data,
      loading: false
    }));
  }, [favoriteContacts]);

  const refetchRegularContacts: ContactsContextValue['regularContacts']['refetch'] = useCallback(async (favoriteIds, variables) => {
    setRegularContactsResult((prev) => ({
      ...prev,
      loading: true
    }));

    const { data } = await regularContacts.refetch({
      ...GET_CONTACT_LIST_DEFAULT_VARIABLES,
      limit: 10,
      ...variables,
      where: {
        _not: {
          id: {
            _in: favoriteIds
          }
        }
      }
    });

    setRegularContactsResult((prev) => ({
      ...prev,
      data,
      loading: false
    }));
  }, [regularContacts]);

  const refetchContacts: ContactsContextValue['contacts']['refetch'] = useCallback(async (variables) => {
    setContactsResult((prev) => ({
      ...prev,
      loading: true
    }));

    const { data } = await contacts.refetch({
      ...GET_CONTACT_LIST_DEFAULT_VARIABLES,
      ...variables
    });

    setContactsResult((prev) => ({
      ...prev,
      data,
      loading: false
    }));
  }, [contacts]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem(FAVORITE_ID) ?? '[]');

    setFavoriteIds(favoriteIds);

    refetchRegularContacts(favoriteIds);
    refetchFavoriteContacts(favoriteIds);
  }, []);

  const addToFavorite = useCallback((id: string) => {
    const newFavoriteIds = [...favoriteIds, id];

    setFavoriteIds(newFavoriteIds);
    localStorage.setItem(FAVORITE_ID, JSON.stringify(newFavoriteIds));

    return newFavoriteIds;
  }, [favoriteIds]);

  const removeFromFavorite = useCallback((id: string) => {
    const updateFavoriteIds = (favoriteIds).filter((favoriteId) => favoriteId !== id);

    setFavoriteIds(updateFavoriteIds);
    localStorage.setItem(FAVORITE_ID, JSON.stringify(updateFavoriteIds));

    return updateFavoriteIds;
  }, [favoriteIds]);

  return (
    <ContactsContext.Provider
      value={{
        regularContacts: {
          ...regularContacts,
          ...regularContactsResult,
          refetch: refetchRegularContacts
        },
        favoriteContacts: {
          ...favoriteContacts,
          ...favoriteContactsResult,
          refetch: refetchFavoriteContacts
        },
        contacts: {
          ...contacts,
          ...contactsResult,
          refetch: refetchContacts
        },
        addToFavorite,
        removeFromFavorite,
        favoriteIds
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}

export default ContactsProvider;

export const useContacts = () => useContext(ContactsContext);
