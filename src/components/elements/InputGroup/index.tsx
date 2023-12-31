'use client';

import { useEffect, useRef, useState } from 'react';

import { InputGroupStyle, ErrorLabel } from './styles';
import { InputGroupProps } from './types';
import Text from '../Text';

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
        <Text as="label" htmlFor={id} typography="sm">
          {label}
        </Text>
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
