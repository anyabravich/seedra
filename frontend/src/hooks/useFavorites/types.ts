export interface IFavoriteItem {
  id: number;
  title: string;
  price: number;
  url?: string;
}

export interface IUseFavorites {
  isFavorite: boolean;
  isInCart: boolean;
  toggleFavorite: () => void;
  toggleCart: () => void;
}

export type StorageType = "favorites" | "goods";
