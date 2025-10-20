export interface ICheckoutItem {
  id: number;
  name: string;
  price: number;
}

export interface IQuantities {
  [id: number]: number;
}

export interface IUseCheckout {
  quantities: IQuantities;
  total: number;
  totalItems: number;
  handleQuantityChange: (id: number, newQuantity: number) => void;
  getItemQuantity: (id: number) => number;
}

export interface IUseCheckoutParams {
  goods: ICheckoutItem[];
}
