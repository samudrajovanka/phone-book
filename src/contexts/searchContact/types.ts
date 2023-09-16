export type SearchContactContextValue = {
  query: {
    name: string
  };
  setQuery: (value: {
    name: string
  }) => void;
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
};
