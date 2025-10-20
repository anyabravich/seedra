import { useState, useMemo, useCallback } from "react";
import { IUseCheckout, IUseCheckoutParams } from "./types";
import {
  initializeQuantities,
  calculateTotal,
  calculateTotalItems,
  getItemQuantity,
} from "./utils";

export const useCheckout = ({ goods }: IUseCheckoutParams): IUseCheckout => {
  const [quantities, setQuantities] = useState(() =>
    initializeQuantities(goods)
  );

  const total = useMemo(() => {
    return calculateTotal(goods, quantities);
  }, [goods, quantities]);

  const totalItems = useMemo(() => {
    return calculateTotalItems(goods, quantities);
  }, [goods, quantities]);

  const handleQuantityChange = useCallback(
    (id: number, newQuantity: number) => {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [id]: newQuantity,
      }));
    },
    []
  );

  const getItemQuantityById = useCallback(
    (id: number) => {
      return getItemQuantity(quantities, id);
    },
    [quantities]
  );

  return {
    quantities,
    total,
    totalItems,
    handleQuantityChange,
    getItemQuantity: getItemQuantityById,
  };
};
