import styles from "./page.module.scss";

import Card from "../Card";
import { IProduct } from "../Products/types";

const ProductsCards = ({
  products: { cards },
}: {
  products: { cards: IProduct[] };
}) => {
  return (
    <div className={styles["products-cards"]}>
      {cards.map((props) => (
        <Card key={props.id} {...props} />
      ))}
    </div>
  );
};

export default ProductsCards;
