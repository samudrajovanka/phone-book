import type { OperationVariables, QueryResult } from '@apollo/client';

import type { GetContactsResponse } from '@/queries/contacts/types';

export type ContactsContextValue = {
  regularContacts: Omit<QueryResult<GetContactsResponse>, 'refetch'> & {
    refetch: (ids: string[], variables?: Partial<OperationVariables>) => Promise<void>;
  };
  favoriteContacts: Omit<QueryResult<GetContactsResponse>, 'refetch'> & {
    refetch: (ids: string[], variables?: Partial<OperationVariables>) => Promise<void>;
  };
  contacts: Omit<QueryResult<GetContactsResponse>, 'refetch'> & {
    refetch: (variables?: Partial<OperationVariables>) => Promise<void>;
  };
  addToFavorite: (id: string) => string[];
  removeFromFavorite: (id: string) => string[];
  favoriteIds: string[];
};

export type ContactsResult = {
  data?: GetContactsResponse;
  loading: boolean;
};
