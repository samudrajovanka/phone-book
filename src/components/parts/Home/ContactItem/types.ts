import type { Phone } from '@/types/contact';

export type ContactItemProps = {
  id: string;
  firstName: string;
  lastName: string;
  phones: Phone[];
  onSuccessDelete?: (id: string) => void;
  onSuccessToggleFavorite?: (newFavoriteIds: string[]) => void;
};

export type FavoriteButtonProps = {
  $isFavorite: boolean;
};
