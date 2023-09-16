type FontWeight = 'normal' | 'medium' | 'bold';

type Typography = 'sm' | 'md' | 'lg';

type Color = 'primary' | 'black' | 'error' | 'success' | 'gray';

export type TextProps = {
  as?:
    | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
  children: React.ReactNode;
  fontWeight?: FontWeight;
  typography?: Typography;
  className?: string;
  color?: Color;
};

export type TextStyleProps = {
  $fontWeight?: FontWeight;
  $typography?: Typography;
  $color?: Color;
}
