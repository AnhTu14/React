import { Box, Link } from "@mui/material";
import useLazyLoadGroup from "@/Hooks/useLazyLoadGroup";
import React from "react";
import { IconsPage } from "@/const/images";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import "./index.scss";
import PreLoadFeatured from "./PreLoadFeatured";
import ProductsFeaturedSlide from "@/page/Home/component/ProductsFeaturedSlide";
import product from "@/api/productApi";

const productType = [
  {
    type: "new",
    title: "Sản phẩm mới về",
    url: "/san-pham-moi",
  },
  {
    type: "hot",
    title: "Sản phẩm hot",
    url: "/san-pham-hot",
  },
  {
    type: "bestSale",
    title: "Sản phẩm bán chạy",
    url: "/san-pham-ban-chay",
  },
];
export default function ProductFeatured() {
  const [scrollpoint, setScrollpoint] = useState(false);
  const refParent = useRef();
  const [activeType, setActiveType] = useState({
    type: "new",
    url: "/san-pham-moi",
  });
  const [loading, setLoading] = useState(false);
  const [dataProduct, setDataProduct] = useState(null);
  const hanldeChangeProductType = (type: string, url: string) => {
    setActiveType({
      type,
      url,
    });
    console.log(type, url);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Bật trạng thái loading
      try {
        const params = {
          type: activeType.type,
        };
        const response = await product.getProducts(params);
        console.log("response", response);
        setDataProduct(response);
      } catch (err) {
        console.log("err");
      } finally {
        setLoading(false); // Tắt trạng thái loading
      }
    };

    fetchData();
  }, [activeType]);
  return (
    <Box className="wrap-pd-featured" ref={refParent}>
      <Box className="wrap-label">
        <Box
          className="wrap-ct"
          sx={{ background: `url(${IconsPage.BannerSummer})` }}
        >
          <Box className="header-featured">Chào hè sôi động tại HanoiNew</Box>

          <Box className="nav-tab">
            {productType.map((item, index) => (
              <Box
                key={index}
                className={`item-nav ${
                  activeType.type === item.type ? "active" : ""
                }`}
                onClick={() => hanldeChangeProductType(item.type, item.url)}
              >
                {item.title}
              </Box>
            ))}
            <Box className="more-feat">
              <Link to={`${activeType.url}`} component={NavLink}>
                {" "}
                Xem thêm ++
              </Link>
            </Box>
          </Box>
          <Box className="products-feature">
            <Box className="banner-feature">
              <img src={IconsPage.BannerFeatured} />
            </Box>
            <Box className="slider-products">
              {loading ? (
                <PreLoadFeatured />
              ) : (
                dataProduct && (
                  <ProductsFeaturedSlide data={dataProduct.products} />
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
