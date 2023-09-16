type Color = 'primary' | 'error' | 'warning';

type Variant = 'solid' | 'outline';

type Size = 'md' | 'lg';

export type ButtonProps = {
  children: React.ReactNode;
  title?: string;
  color?: Color;
  variant?: Variant;
  onClick?: () => void;
  type?: 'submit' | 'button';
  isBlock?: boolean;
  size?: Size;
  disabled?: boolean; 
  isLoading?: boolean;
};

export type ButtonStyleProps = {
  $isBlock?: boolean;
  $color: Color;
  $size: Size;
  $variant: Variant;
}
