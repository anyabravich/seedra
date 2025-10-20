export interface IProduct {
  id: number;
  title: string;
  price: number;
  url: string;
  category?: string;
}

export interface IUseProductFilter {
  category: string;
  activeIndex: number;
  filteredProducts: IProduct[];
  handleChangeCategory: (index: number, text: string) => void;
  resetFilter: () => void;
}

export interface IUseProductFilterParams {
  products: IProduct[];
  initialCategory?: string;
}
