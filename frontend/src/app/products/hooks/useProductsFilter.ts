import { useState, useMemo } from "react";
import { IProduct } from "@/hooks/useProductFilter/types";

export const useProductsFilter = (products: IProduct[]) => {
  const [category, setCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeCategory = (index: number, text: string) => {
    setCategory(text);
    setActiveIndex(index);
  };

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => product.category === category);

    if (filtered.length > 0) {
      return filtered;
    }

    return category === "all" ? products : [];
  }, [products, category]);

  return {
    activeIndex,
    filteredProducts,
    handleChangeCategory,
  };
};
