import { Box, Typography } from "@mui/material";
import ItemProduct from "@/components/ItemProduct";
import LayoutAccount from "@/components/LayoutAccount";
import React from "react";
import { useState, useEffect } from "react";
import "@/page/FavoriteProducts/styles.scss";
import Pagination from "@/components/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import product from "@/api/productApi";
import { Helmet } from "react-helmet-async";

const ProductsFavorite = () => {
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [paramApi, setParamApi] = useState({
    page: 1,
    limit: 10,
  });
  const [productLike, setProductLike] = useState(null);

  const handleChangePage = (value) => {
    setParamApi((prev) => {
      return {
        ...prev,
        page: value,
      };
    });
  };

  const handleResetPage = () => {
    setParamApi((prev) => {
      return {
        ...prev,
        page: 1,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await product.getProductsFavorite(paramApi);
        setProductLike(response.products);
        setTotal(response.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <LayoutAccount>
      <Box className={`page-liked `}>
        <Helmet>
          <title>Sản phẩm yêu thích</title>
        </Helmet>
        {loading && (
          <Box className="loading">
            <CircularProgress />
          </Box>
        )}
        {productLike &&
          (productLike.length ? (
            <>
              <Box
                className={`wrap-list`}
                sx={(theme) => ({
                  background: theme.backgroundColor.blackWhite,
                })}
              >
                {productLike.map((product, index) => (
                  <ItemProduct
                    key={index}
                    // handleMouseMove={handleMouseMove}
                    // handleMouseLeave={handleMouseLeave}
                    itemData={product}
                    cssCategory={"custom"}
                    deletePdliked={true}
                    resetPage={handleResetPage}
                  />
                ))}
              </Box>
              <Pagination
                total={total}
                limit={paramApi.limit}
                handleChangePage={handleChangePage}
              />
            </>
          ) : (
            <Box
              className={`box-not-products`}
              sx={(theme) => ({
                background: theme.backgroundColor.blackWhite,
              })}
            >
              <Typography>
                Bạn chưa thêm sảm phẩm vào danh sách yêu thích...
              </Typography>
              <Pagination
                total={total}
                limit={paramApi.limit}
                handleChangePage={handleChangePage}
              />
            </Box>
          ))}
      </Box>
    </LayoutAccount>
  );
};

export default ProductsFavorite;
