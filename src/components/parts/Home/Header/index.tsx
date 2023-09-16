'use client';

import Link from 'next/link';

import Button from '@/components/elements/Button';
import Title from '@/components/elements/Title';
import Input from '@/components/elements/Input';

import { HeaderContainerStyle } from './styles';

const Header = () => {
  return (
    <HeaderContainerStyle>
      <Title>Contact List</Title>

      <Link href="/create">
        <Button>Add Contact</Button>
      </Link>
    </HeaderContainerStyle>
  );
};

export default Header;
