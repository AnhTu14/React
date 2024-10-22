import { Box } from "@mui/material";
import Banner from "@/page/Home/component/Banner/index";
import ProductFeatured from "@/page/Home/component/ProductFeature/index";
import { useSelector } from "react-redux";
import CategoryProduct from "@/page/Home/component/CategoryProduct";
import ArticleFeatured from "@/page/Home/component/ArticleFeatured";
import "./styles.scss";
export default function HomePage() {
  const dataCategory = useSelector((state: unknown) => state.product);
  return (
    <>
      <Box>
        <Banner />
        <ProductFeatured />
        {/* {dataCategory?.categories.length > 0 &&
          dataCategory.categories.map(
            (category, index) =>
              category.isFeatured === 1 && (
                <CategoryProduct dataCat={category} key={index} />
              )
          )} */}
        <ArticleFeatured />
      </Box>
    </>
  );
}
