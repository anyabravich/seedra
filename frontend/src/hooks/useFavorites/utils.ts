import { IFavoriteItem, StorageType } from "./types";

export const getStorageItems = (storageKey: StorageType): IFavoriteItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const items = localStorage.getItem(storageKey);
    return items ? JSON.parse(items) : [];
  } catch (error) {
    console.error(`Error reading ${storageKey} from localStorage:`, error);
    return [];
  }
};

export const setStorageItems = (
  storageKey: StorageType,
  items: IFavoriteItem[]
): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(storageKey, JSON.stringify(items));
  } catch (error) {
    console.error(`Error writing ${storageKey} to localStorage:`, error);
  }
};

export const isItemInStorage = (
  items: IFavoriteItem[],
  itemId: number
): boolean => {
  return items.some(item => item.id === itemId);
};

export const addItemToStorage = (
  items: IFavoriteItem[],
  newItem: IFavoriteItem
): IFavoriteItem[] => {
  return [...items, newItem];
};

export const removeItemFromStorage = (
  items: IFavoriteItem[],
  itemId: number
): IFavoriteItem[] => {
  return items.filter(item => item.id !== itemId);
};
