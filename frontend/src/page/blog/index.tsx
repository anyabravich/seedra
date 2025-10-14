
import BlogList from "@/components/BlogList";
import ProductsNavigation from "@/components/ProductsNavigation";
import { blogData as data } from "../../mock/blogData";

const BlogPage = () => {
  return (
    <>
        <ProductsNavigation />

        <BlogList data={data} className={`slider`} />
    </>
  );
};

export default BlogPage;