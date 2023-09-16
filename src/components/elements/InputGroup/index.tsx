'use client';

import { useEffect, useRef, useState } from 'react';

import { InputGroupStyle, ErrorLabel } from './styles';
import { InputGroupProps } from './types';

const InputGroup: React.FC<InputGroupProps> = ({
  children,
  label,
  id,
  errorMessage,
  ...props
}) => {
  return (
    <InputGroupStyle $isBlock={props.isBlock}>
      {label ? (
        <label htmlFor={id}>
          {label}
        </label>
      ) : null}

      {children}

      {errorMessage ? (
        <ErrorLabel>
          {errorMessage}
        </ErrorLabel>
      ) : null}
    </InputGroupStyle>
  );
};

export default InputGroup;
