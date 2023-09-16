'use client';

import Link from 'next/link';

import Button from '@/components/elements/Button';
import Title from '@/components/elements/Title';
import Input from '@/components/elements/Input';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';

import { HeaderContainerStyle } from './styles';

const Header = () => {
  return (
    <HeaderContainerStyle>
      <Link href="/">
        <Button variant="outline">
          <ArrowLeftIcon />
          Back
        </Button>
      </Link>

      <Title>Create Contact</Title>

    </HeaderContainerStyle>
  );
};

export default Header;
