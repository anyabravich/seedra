import { ICheckoutItem, IQuantities } from "./types";

export const initializeQuantities = (goods: ICheckoutItem[]): IQuantities => {
  return goods.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || 1;
    return acc;
  }, {} as IQuantities);
};

export const calculateTotal = (
  goods: ICheckoutItem[],
  quantities: IQuantities
): number => {
  return Math.round(
    goods.reduce(
      (acc, item) => acc + Number(item.price) * (quantities[item.id] || 1),
      0
    )
  );
};

export const calculateTotalItems = (
  goods: ICheckoutItem[],
  quantities: IQuantities
): number => {
  return goods.reduce((acc, item) => acc + (quantities[item.id] || 1), 0);
};

export const getItemQuantity = (
  quantities: IQuantities,
  itemId: number
): number => {
  return quantities[itemId] || 1;
};
