'use client';

import { forwardRef } from 'react';

import InputGroup from '@/components/elements/InputGroup';

import { InputStyle } from './styles';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  type = 'text',
  ...props
}, ref) => {
  return (
    <InputGroup
      label={label}
      {...props}
    >
      <InputStyle
        type={type}
        ref={ref}
        {...props}
      />
    </InputGroup>
  );
});

Input.displayName = 'Input';

export default Input