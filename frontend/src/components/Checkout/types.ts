export interface ICard {
  id: number;
  name: string;
  price: number;
}

export interface ICheckout {
  goods: ICard[];
}

export interface Quantities {
  [id: string]: number;
}
