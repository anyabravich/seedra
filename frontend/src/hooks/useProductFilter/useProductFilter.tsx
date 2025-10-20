import { useState, useMemo, useCallback } from "react";
import { IUseProductFilter, IUseProductFilterParams } from "./types";
import { filterProductsByCategory, getProductsView } from "./utils";

export const useProductFilter = ({
  products,
  initialCategory = "all",
}: IUseProductFilterParams): IUseProductFilter => {
  const [category, setCategory] = useState(initialCategory);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProducts = useMemo(() => {
    return filterProductsByCategory(products, category);
  }, [products, category]);

  const productsView = useMemo(() => {
    return getProductsView(filteredProducts, category, products);
  }, [filteredProducts, category, products]);

  const handleChangeCategory = useCallback((index: number, text: string) => {
    setCategory(text);
    setActiveIndex(index);
  }, []);

  const resetFilter = useCallback(() => {
    setCategory("all");
    setActiveIndex(0);
  }, []);

  return {
    category,
    activeIndex,
    filteredProducts: productsView,
    handleChangeCategory,
    resetFilter,
  };
};
