import BlogList from "@/components/BlogList";
import ProductsNavigation from "@/components/ProductsNavigation";
import { blogData as data } from "../../mock/blogData";
import BannerHero from "@/components/BannerHero";
import styles from "./page.module.scss";
import cn from "classnames";

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <BannerHero />

      <ProductsNavigation />

      <BlogList
        data={data}
        className={cn(styles.blogList)}
        disableSlider={true}
      />
    </div>
  );
};

export default BlogPage;
