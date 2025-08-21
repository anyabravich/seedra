import Categories from "@/components/Categories";
import Container from "@/components/Container";
import ProductsGrid from "@/components/ProductsGrid";
import ProductsNavigation from "@/components/ProductsNavigation";

export default async function Products() {
  return (
    <Container>
      <ProductsNavigation />
      {/* <Categories />
      <ProductsGrid /> */}
    </Container>
  );
}
