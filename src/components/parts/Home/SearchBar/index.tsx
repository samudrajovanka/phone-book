'use client';

import { useState, useCallback, type ChangeEvent } from 'react';

import { useForm } from 'react-hook-form';

import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import { useContacts } from '@/contexts/contacts';
import { useSearchContact } from '@/contexts/searchContact';
import useDebounce from '@/lib/hooks/useDebounce';

import { SearchBarContainer } from './styles';
import { SearchForm } from './types';

const SearchBar = () => {
  const contactsCtx = useContacts();
  const searchContactCtx =  useSearchContact();

  const [name, setName] = useState('');

  const {
    register,
    handleSubmit
  } = useForm<SearchForm>();

  const search = useCallback(async () => {
    searchContactCtx.setQuery({ name });

    if (name === '') {
      await contactsCtx.regularContacts.refetch(contactsCtx.favoriteIds);
      await contactsCtx.favoriteContacts.refetch(contactsCtx.favoriteIds);

      return;
    }
    
    await contactsCtx.contacts.refetch({
      where: {
        _or: [
          {
            first_name: {
              _ilike: `%${name}%`
            }
          },
          {
            last_name: {
              _ilike: `%${name}%`
            }
          }
        ]
      }
    });

    searchContactCtx.setIsSearching(false);
  }, [
    contactsCtx.contacts,
    contactsCtx.favoriteContacts,
    contactsCtx.favoriteIds,
    contactsCtx.regularContacts,
    name,
    searchContactCtx
  ]);

  useDebounce(search, 1000, [name]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      searchContactCtx.setIsSearching(true);
    };

    setName(e.target.value);
  }, [searchContactCtx]);

  return (
    <SearchBarContainer>
      <Input
        id="search"
        name="search"
        title="Search your contact"
        placeholder="Search your contact"
        isBlock
        onChange={handleChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
