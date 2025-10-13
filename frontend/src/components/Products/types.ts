export interface IProduct {
  id: number;
  title: string;
  price: number;
  url: string;
  category?: string;
}

export interface IProducts {
  cards: IProduct[];
}
