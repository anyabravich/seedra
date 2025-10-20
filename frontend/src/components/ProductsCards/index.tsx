import { FC } from "react";

import Card from "../Card";
import { IProduct } from "@/hooks/useProductFilter/types";
import styles from "./page.module.scss";

const ProductsCards: FC<{
  products: { cards: IProduct[] };
}> = ({ products: { cards } }) => {
  return (
    <div className={styles["products-cards"]}>
      {cards.map(props => (
        <Card key={props.id} {...props} />
      ))}
    </div>
  );
};

export default ProductsCards;
