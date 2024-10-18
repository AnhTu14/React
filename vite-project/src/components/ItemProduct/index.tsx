import { Box, Link, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { NavLink, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import { formatCurrency } from "@/utils/formatNumBerPrice";
import "./styles.scss";
import { ToSlug } from "utils/format";
import { useState } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function ItemProduct({
  itemData,
  handleMouseMove,
  handleMouseLeave,
  deletePdliked,
  resetPage,
  classPrivate,
  cssCategory,
}) {
  const domain = "https://hanoinew.vn/";

  useEffect(() => {}, []);

  const handleAddIdCart = (id: string) => {
    console.log("id cart", id);
  };
  const handleDeleteProductLiked = (id: string) => {
    console.log("idP", id);
  };
  return (
    <Box
      className={`item-pd${cssCategory === "custom" ? "custom" : ""}`}
      sx={(theme) => ({
        background: theme.backgroundColor.secondary,
        "&.custom": {
          background: theme.backgroundColor.customPd,
        },
      })}
    >
      <Link
        to={`/san-pham`}
        component={NavLink}
        className={`wrap-img`}
        sx={() => ({
          display: "block",
          "& img": {
            display: "block",
            width: "100%",
            height: "auto",
          },
        })}
      >
        <img
          src={domain + itemData.productImage.large}
          alt={itemData.productName}
        />
      </Link>
      <Box className="wrap-icon">
        <Link to={"/ssss"} component={NavLink}>
          {itemData.productType.isNew === 0 && (
            <img
              className="icon-new"
              src={`${domain}/static/assets/default/images/ic_new.png`}
              alt=""
            />
          )}
          <Box className="icon-discount">
            {itemData.price_off > 0 && (
              <Box className="text" component={"span"}>
                {`${itemData.price_off} %`}
              </Box>
            )}
          </Box>
        </Link>
      </Box>
      <Box className="text-pd">
        <Link to={"#"} component={NavLink} className="name-pd">
          {itemData.productName}
        </Link>
        <Box className="price-pd">{formatCurrency(itemData.price)}</Box>
        {itemData.marketPrice > 0 && (
          <Box className="market-pd">
            {formatCurrency(itemData.marketPrice)}
          </Box>
        )}
      </Box>
      <Box className={"box-check"}>
        {itemData.quantity > 0 ? (
          <Box component={"span"} className={"check"}>
            {" "}
            <CheckIcon /> <Typography component={"span"}>Còn hàng</Typography>
          </Box>
        ) : (
          <Typography component={"span"} className={"call-sp"}>
            Liên hệ
          </Typography>
        )}
        <Typography
          className={"add-cart"}
          component={"span"}
          onClick={() => handleAddIdCart(itemData.id)}
        >
          <ShoppingCartIcon />
          <Typography component={"span"}>Thêm vào giỏ</Typography>
        </Typography>
      </Box>
      {deletePdliked && (
        <Typography className="del" onClick={handleDeleteProductLiked}>
          <DeleteIcon />
          Xóa
        </Typography>
      )}
    </Box>
  );
}
export default memo(ItemProduct);
