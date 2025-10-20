import { useState, useEffect, useCallback } from "react";
import { IUseFavorites, IFavoriteItem, StorageType } from "./types";
import {
  getStorageItems,
  setStorageItems,
  isItemInStorage,
  addItemToStorage,
  removeItemFromStorage,
} from "./utils";

export const useFavorites = (
  productId: number,
  productData: Omit<IFavoriteItem, "id">
): IUseFavorites => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const updateStates = useCallback(() => {
    const favorites = getStorageItems("favorites");
    const goods = getStorageItems("goods");

    setIsFavorite(isItemInStorage(favorites, productId));
    setIsInCart(isItemInStorage(goods, productId));
  }, [productId]);

  useEffect(() => {
    updateStates();
  }, [updateStates]);

  const toggleStorageItem = useCallback(
    (storageType: StorageType) => {
      const items = getStorageItems(storageType);
      const isInStorage = isItemInStorage(items, productId);

      let newItems: IFavoriteItem[];
      if (isInStorage) {
        newItems = removeItemFromStorage(items, productId);
      } else {
        const newItem: IFavoriteItem = {
          id: productId,
          ...productData,
        };
        newItems = addItemToStorage(items, newItem);
      }

      setStorageItems(storageType, newItems);
      updateStates();
    },
    [productId, productData, updateStates]
  );

  const toggleFavorite = useCallback(() => {
    toggleStorageItem("favorites");
  }, [toggleStorageItem]);

  const toggleCart = useCallback(() => {
    toggleStorageItem("goods");
  }, [toggleStorageItem]);

  return {
    isFavorite,
    isInCart,
    toggleFavorite,
    toggleCart,
  };
};
