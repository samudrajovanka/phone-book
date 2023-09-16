import { InputGroupProps } from '@/components/elements/InputGroup/types';

export type InputProps = Omit<InputGroupProps, 'children'> & {
  type?: 'text';
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
