import { IProduct } from "@/hooks/useProductFilter";

export interface IProductsCard extends IProduct {}

export interface IProducts {
  cards: IProductsCard[];
}

export interface IProductsProps extends IProducts {}
