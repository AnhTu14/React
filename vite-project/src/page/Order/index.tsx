import { Box, Link, Typography } from "@mui/material";
import LayoutAccount from "@/components/LayoutAccount";
import orderApi from "@/api/order";
import { useSnackbar } from "notistack";
import { postCart } from "page/cartSlice";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { formatCurrency } from "utils/formatNumBerPrice";
import "@/page/Order/styles.scss";

const Order = () => {
  const dispatch = useDispatch();
  const [dataOrder, setdataOrder] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const handleRepurchase = (products) => {
    console.log("products", products);
    // const payload = products.map((product) => {
    //   return { id: product.id, count: product.inCart.count };
    // });
    // dispatch(postCart(payload));
    enqueueSnackbar("Đã thêm sản phẩm vào giỏ hàng", { variant: "success" });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await orderApi.getOrder();
        console.log("response", response);
        setdataOrder(response.bill);
      } catch (err) {
        console.log("err");
      }
    };

    fetchData();
  }, []);
  return (
    <LayoutAccount>
      <Box className="page-order">
        <Helmet>
          <title>Quản lý đơn hàng</title>
        </Helmet>
        {dataOrder && dataOrder?.length > 0 ? (
          <Box className="wrap-bill">
            {dataOrder.map((order, orderIndex) => (
              <Box className={`item-oder`} key={orderIndex}>
                {order.products.map((product, indexPd) => (
                  <Box className="item-pd-order" key={indexPd}>
                    <Box className="img-pd">
                      <img
                        src={`https://hanoinew.vn${product.productImage.large}`}
                      />
                    </Box>
                    <Box className="name-pd">
                      <Typography className="text">
                        {product.productName}
                      </Typography>
                      <Typography className="price-mb">
                        {product.inCart.count} sản phẩm |{" "}
                        {/* {formatCurrency(product.inCart.total)} đ */}
                      </Typography>
                    </Box>
                    <Box className="count-pd">
                      <Typography>{product.inCart.count}</Typography>
                    </Box>
                    <Box className="price-pd">
                      <Typography>
                        {/* {formatCurrency(product.inCart.total)} đ */}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Box className="total-price">
                  <Typography className="text">
                    {" "}
                    <Typography component={"span"}>Tổng tiền:</Typography>
                    {/* {formatCurrency(order.totaBill)} đ */}
                  </Typography>
                </Box>
                <Box className="link-oder">
                  <Typography
                    className="btn"
                    onClick={() => handleRepurchase({})}
                  >
                    Mua lại
                  </Typography>
                  <Link className="btn" to={`/order/`} component={NavLink}>
                    Xem chi tiết
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Box
            className={`box-not-products`}
            sx={(theme) => ({
              background: theme.backgroundColor.blackWhite,
            })}
          >
            <Typography>Hiện chưa có đơn đặt hàng ...</Typography>
          </Box>
        )}
      </Box>
    </LayoutAccount>
  );
};

export default Order;
