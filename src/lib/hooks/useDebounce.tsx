import { useEffect } from 'react';

import useTimeout from './useTimeout';

type UseDebouce = (
  callback: () => void,
  delay: number,
  dependencies: any[]
) => void;

const useDebounce: UseDebouce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);
  
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
};

export default useDebounce;
