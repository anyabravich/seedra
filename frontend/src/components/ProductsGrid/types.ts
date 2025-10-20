import { IProduct } from "@/hooks/useProductFilter/types";

export interface IProductsGrid {
  products: { cards: IProduct[] };
}
