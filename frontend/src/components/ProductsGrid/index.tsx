import Filters from "../Filters";
import ProductsCards from "../ProductsCards";

import styles from "./page.module.scss";
import { IProduct } from "../Products/types";

interface IProductsGrid {
  products: { cards: IProduct[] };
}

const ProductsGrid = (products: IProductsGrid) => {
  return (
    <div className={styles["products-grid"]}>
      <Filters hideMobile={true} />
      <ProductsCards {...products} />
    </div>
  );
};

export default ProductsGrid;
