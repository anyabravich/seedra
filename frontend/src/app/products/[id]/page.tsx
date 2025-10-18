import styles from "./page.module.scss";

import Container from "@/components/Container";
import ProductsGallery from "@/components/ProductsGallery";
import Label from "@/components/Label";
import Checkbox from "@/components/Checkbox";
import { packages } from "./data";
import Button from "@/components/Button";
import Favorite from "@/components/Icons/Icons/Favorite";
import ProductsRelated from "@/components/ProductsRelated";
import { getProductById } from "@/components/Products/data";

const Products = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = await getProductById(+id);

  if (!product) return null;

  const { title, category } = product;

  console.log(product);

  return (
    <section className={styles["products"]}>
      <Container>
        <section className={styles.grid}>
          <div className={styles.gallery}>
            <ProductsGallery />
          </div>
          <div className={styles.info}>
            <h1 className={`${styles.title} h3`}>{title}</h1>
            <ul className={styles.labels}>
              <li className={styles.label}>
                <Label text="available" />
              </li>
              <li className={styles.label}>
                <Label text={category.toLowerCase()} />
              </li>
            </ul>
            <div className={`${styles.quantity} ${styles.quantityBlock}`}>
              <header className={styles.quantityHeader}>
                <p className={styles.quantityTitle}>
                  <span>Size</span>
                  <span>2 pack</span>
                </p>
              </header>
            </div>
            <div className={`${styles.packages} ${styles.packagesBlock}`}>
              {packages.map(({ name, price }, index) => (
                <Checkbox
                  key={index}
                  className={"_package"}
                  label={name}
                  price={price}
                  name="package"
                />
              ))}
            </div>
            <div className={styles.prices}>
              <div className={styles.price}>
                <p
                  className={`${styles.oldPriceValue} medium-16 text-secondary`}
                >
                  $15.56
                </p>
                <p className={styles.actualPriceValue}>$12.56</p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.favorite} type="button">
                  <Favorite variant="green" />
                </button>
                <Button className={styles.add} variant="primary">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles.information} ${styles.productsInformation}`}
        >
          <h2 className={`${styles.informationTitle} h2`}>
            Product information.
          </h2>
          <div className={styles.informationContent}>
            <ul className={`${styles.informationList} light-16`}>
              <li>
                EEDRA Cilantro Seeds&nbsp;&mdash; contains 300 seeds
                in&nbsp;1&nbsp;Pack and professional instructions created
                by&nbsp;PhD Helga George
              </li>
              <li>
                Be&nbsp;sure of&nbsp;our quality&nbsp;&mdash; the freshest
                batches of&nbsp;this season. Non-GMO, Heirloom&nbsp;&mdash; our
                seeds were tested and have the best germination ratings. Your
                easy growing experience is&nbsp;our guarantee
              </li>
              <li>
                Cilantro common culinary uses: salsa, guacamole, pesto, salads,
                chutney, baked breads, pad thai, pico de&nbsp;gallo, rice,
                grilled shrimp skewers, falafel, and more
              </li>
              <li>
                Proudly sourced in&nbsp;the USA&nbsp;&mdash; our garden seeds
                are grown, harvested, and packaged in&nbsp;the USA.
                We&nbsp;support local farmers and are happy to&nbsp;produce this
                American-made product
              </li>
              <li>
                SEEDRA customer service - please contact us directly through
                Amazon with any questions or concerns about our products. We
                care about each customer and do our best to provide you with
                100% satisfaction
              </li>
            </ul>
            <table className={styles.informationTable}>
              <tbody>
                <tr>
                  <td>Package Dimensions</td>
                  <td>5.51 x 3.5 x 0.35 inches</td>
                </tr>
                <tr>
                  <td>Item Weight</td>
                  <td>0.317 ounces</td>
                </tr>
                <tr>
                  <td>ASIN</td>
                  <td>B08Z3HN5MP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <ProductsRelated />
      </Container>
    </section>
  );
};

export default Products;
