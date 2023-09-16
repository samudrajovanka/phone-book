import { TextProps } from '@/components/elements/Text/types';

export type TitleProps = Pick<TextProps, 'typography'> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
};
