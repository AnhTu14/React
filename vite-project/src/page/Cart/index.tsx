import { Box, Typography } from "@mui/material";
import Breadcrumb from "@/components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import ProductInCart from "./components/ProductInCart";
import FormCart from "./components/FormCart";

import "@/page/Cart/styles.scss";
import { Helmet } from "react-helmet-async";

export default function Cart() {
  const dispatch = useDispatch();
  const lisProductInCart = useSelector((state) => state.cart.products);
  console.log("lisProductInCart", lisProductInCart);
  return (
    <Box className="main-cart">
      <Helmet>
        <title>Giỏ hàng</title>
      </Helmet>
      <Breadcrumb path="gio-hang" namePage="giỏ hàng" />
      {lisProductInCart.length === 0 && (
        <Box className="wrap-label">
          <Box
            className={`wrap-info`}
            sx={(theme) => ({
              background: theme.backgroundColor.blackWhite,
            })}
          >
            <Box
              className="not-cart"
              sx={{ textAlign: "center", padding: "100px 0" }}
            >
              <Typography>Không có sản phẩm trong giỏ hàng của bạn</Typography>
            </Box>
          </Box>
        </Box>
      )}
      {lisProductInCart.length > 0 && (
        <Box className="wrap-label">
          {<ProductInCart />}
          <FormCart />
        </Box>
      )}
    </Box>
  );
}
