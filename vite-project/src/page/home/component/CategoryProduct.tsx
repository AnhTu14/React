import { Link } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ProductSlide from "@/page/Home/component/ProductSlide";
import { useEffect, useState } from "react";
import product from "@/api/productApi";
import useLazyLoad from "@/hooks/useLazyLoadGroup";
export default function CategoryProduct(props) {
  const [dataProductCategory, setdataProductCategory] = useState({});
  const { dataCat } = props;
  const { isVisible, elementRef } = useLazyLoad({
    rootMargin: "0px 0px 200px 0px", // Kích hoạt trước khi phần tử xuất hiện trên màn hình 200px
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProductbyCategory = async () => {
      setLoading(true);
      try {
        const params = {
          categoryId: dataCat.id,
        };
        const res = await product.getProducts(params);
        setdataProductCategory(res);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    // Chỉ tải dữ liệu khi phần tử được nhìn thấy
    if (isVisible) {
      fetchProductbyCategory();
    }
  }, [isVisible, dataCat.id]); // Gọi lại khi isVisible thay đổi hoặc dataCat.id thay đổi
  return (
    <Box
      className={"block-pd-by-category"}
      component={"section"}
      ref={elementRef}
    >
      <Box className={`wrap-label`}>
        <Box
          sx={() => ({
            background: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
          })}
        >
          <Box
            className={`header-nav`}
            sx={(theme) => ({
              borderBottom: `solid 2px ${theme.palette.primary.main}`,
            })}
          >
            <Box
              className={`wrap-lis-category`}
              sx={(theme) => ({
                background: theme.backgroundColor.primary,
              })}
            >
              <Link
                to={`danh-muc-san-pham`}
                component={NavLink}
                className={`cat-lv1`}
                sx={(theme) => ({
                  background: theme.palette.primary.main,
                })}
              >
                {dataCat.name}
              </Link>
              <Box className="wrap-cat-lv2">
                {dataCat.isParent === 1 &&
                  dataCat.children.slice(0, 4).map((catLv2) => (
                    <Link
                      key={catLv2.id}
                      to={`danh-muc-san-pham/${catLv2.id}.html`}
                      component={NavLink}
                      className="cat-lv2"
                    >
                      {catLv2.name}
                    </Link>
                  ))}
              </Box>
            </Box>
            <Link
              to={`danh-muc-san-pham/$`}
              className={`more-pd`}
              sx={(theme) => ({
                position: "absolute",
                top: "50%",
                right: "12px",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                color: theme.palette.primary.main,
                "& .icon-next": {
                  display: "flex",
                  alignItems: "center",
                  "& svg": {
                    width: "15px",
                  },
                },
              })}
              component={NavLink}
            >
              <Box component={"span"}>Xem thêm</Box>
              <Box component={"span"} className={"icon-next"}>
                <DoubleArrowIcon />
              </Box>
            </Link>
          </Box>
          <Box className={"wrap-pd"}>
            {loading
              ? "loading..."
              : dataProductCategory?.products &&
                dataProductCategory?.products.length > 0 && (
                  <ProductSlide data={dataProductCategory.products} />
                )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
