'use client';

import { createContext, useState, useContext } from 'react';

import { SearchContactContextValue } from './types';

const SearchContactContext = createContext<SearchContactContextValue>({} as SearchContactContextValue);

const SearchContactProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState({
    name: '',
  });

  return (
    <SearchContactContext.Provider
      value={{
        query,
        setQuery,
        isSearching,
        setIsSearching
      }}
    >
      {children}
    </SearchContactContext.Provider>
  );
};

export default SearchContactProvider;

export const useSearchContact = () => useContext(SearchContactContext);
