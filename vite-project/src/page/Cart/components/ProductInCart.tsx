import { Box, SvgIcon, Typography } from "@mui/material";
import { deleteCart, updateCart } from "@/page/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "@/utils/formatNumBerPrice";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

// import CountDownTime from "page/HomePage/ComponentHome/CountDownTime";
export default function ProductInCart() {
  const dataCart = useSelector((state) => state.cart.products);
  const [totalCart, setTotalCart] = useState(0);
  const dispatch = useDispatch();
  const handleChangeValue = (e, productId) => {
    const value = e.target.value.trim();
    const testNumber = /^[0-9]+$/;
    if (testNumber.test(value)) {
      dispatch(updateCart({ id: productId, countCart: value }));
    }
  };
  const handleRemoveProduct = (productId) => {
    dispatch(deleteCart(productId));
  };
  useEffect(() => {
    const total = dataCart.reduce((total, productItem) => {
      const price = productItem.enableDeal
        ? productItem.deal.priceDeal
        : productItem.price;
      const count = productItem.countCart;
      return total + price * count;
    }, 0);
    setTotalCart(total);
  }, [dataCart]);
  return (
    <Box
      className={`wrap-info`}
      sx={(theme) => ({
        background: theme.backgroundColor.blackWhite,
      })}
    >
      <Box className="list-pd">
        {dataCart.map((product, index) => (
          <Box className="row-item" key={index}>
            <Box className="col-item">
              <img
                src={"https://hanoinew.vn/" + product.productImage.large}
                alt=""
              />
            </Box>
            <Box className="col-item">
              <Typography className="name-pd" variant="h7">
                {product.productName}
              </Typography>
              <Typography className="warranty">
                Bảo hành: {product.warranty}
              </Typography>
              {product.enableDeal && (
                <Box className="timeLeft-cart">
                  <Typography className="text-flash">Flash sale</Typography>
                  {/* <CountDownTime
                    disableDeal={() => handleDispatchDisableDeal(product.id)}
                    dateDeal={product.deal.dateDeal}
                  /> */}
                </Box>
              )}
            </Box>
            <Box className="wrap-sm">
              <Typography component={"div"} className="col-item">
                {product.enableDeal
                  ? `${formatCurrency(product.deal.priceDeal)} vnd`
                  : `${formatCurrency(product.price)} vnd`}
              </Typography>
              <Typography component={"div"} className="col-item">
                <input
                  onChange={(e) => handleChangeValue(e, product.id)}
                  type="number"
                  value={product.countCart}
                />
              </Typography>
              <Typography component={"div"} className="col-item">
                {formatCurrency(product.totalCart)} vnd
              </Typography>
              <Typography
                component={"div"}
                className="col-item"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <SvgIcon fontSize="small" color="red" component={DeleteIcon} />
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="total-price">
        <Typography variant="h6">
          Tổng tiền: {formatCurrency(totalCart)} vnd
        </Typography>
        <Typography>Chưa bao gồm phí vận chuyển</Typography>
      </Box>
    </Box>
  );
}
