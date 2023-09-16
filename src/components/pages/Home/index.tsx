import { Suspense } from 'react'

import Container from '@/components/elements/Container';
import Text from '@/components/elements/Text';
import {
  RegularContactList,
  Header,
  SearchBar,
  FavoriteContactList,
  ContactList
  } from '@/components/parts/Home';

const Home = () => {
  return (
    <Container className="margin-y-layout">
      <header>
        <Header />

        <SearchBar />
      </header>
      
      <ContactList />
    </Container>
  );
};

export default Home;
