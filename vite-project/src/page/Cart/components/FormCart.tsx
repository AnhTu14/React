import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PrintIcon from "@mui/icons-material/Print";
import CheckIcon from "@mui/icons-material/Check";
import Breadcrumb from "@/components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "@/utils/formatNumBerPrice";
import { styled } from "@mui/styles";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchemaCart } from "@/validations/validationSchema";
import { useReactToPrint } from "react-to-print";
import CircularProgress from "@mui/material/CircularProgress";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none !important",
  background: "none !important",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    display: "block",
    padding: 0,
    minHeight: "auto",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      display: "block",
      margin: 0,
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
}));

const FormCart = () => {
  const navigate = useNavigate();
  const dataCart = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.auth.user);
  const [totalCart, setTotalCart] = useState(0);
  const [expBillCompany, setExpBillCompany] = useState("no");
  const [billAccordion, setBillAccordion] = useState(false);
  const [payMethodAccordion, setPayMethodAccordion] = useState(false);

  const handleChangeBillAccordion = (panel, e, formik) => {
    const value = e.target.value;
    setExpBillCompany(value === "no" ? "yes" : "no");
    formik.setFieldValue("expBillCompany", `${value === "no" ? "yes" : "no"}`);
    if (value === "yes") {
      formik.setFieldValue("nameCompany", "");
      formik.setFieldValue("addressCompany", "");
      formik.setFieldValue("texCodeCompany", "");
    }
    setBillAccordion(panel === billAccordion ? false : panel);
  };
  const handleChangePayMethodAccordion = (panel) => {
    setPayMethodAccordion(panel === payMethodAccordion ? false : panel);
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
  });
  const formik = useFormik({
    initialValues: {
      email: user ? user.email : "",
      phone: user ? user.phone : "",
      name: user ? user.userName : "",
      address: user ? user.address : "",
      note: "",
      expBillCompany: "",
      nameCompany: "",
      addressCompany: "",
      texCodeCompany: "",
      payMethod: "Thanh toán khi nhận hàng",
    },
    validationSchema: validationSchemaCart,
    onSubmit: (values, { resetForm }) => {
      let infoCart = {
        ...values,
        products: shortenProducts,
      };
      console.log(infoCart);
      sendCart(infoCart);
      // resetForm();
    },
    enableReinitialize: true,
  });
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
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          className={`wrap-form-cart`}
          sx={(theme) => ({
            background: theme.backgroundColor.primary,
          })}
        >
          <Box className="item-col-form">
            <Typography
              variant="h7"
              component={"div"}
              className={`title-col`}
              sx={(theme) => ({ background: theme.backgroundColor.secondary })}
            >
              Thông tin người mua
            </Typography>
            <Box className="group-ip">
              <TextField
                sx={(theme) => ({
                  width: "100%",
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    background: theme.backgroundColor.blackWhite2,
                    color: theme.colorText.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.colorText.primary,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#c1c1c1",
                  },
                })}
                id="name"
                name="name"
                label="Họ tên"
                variant="outlined"
                size="small"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
              />
              <TextField
                sx={(theme) => ({
                  width: "100%",
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    background: theme.backgroundColor.blackWhite2,
                    color: theme.colorText.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.colorText.primary,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#c1c1c1",
                  },
                })}
                id="phone"
                label="Số điện thoại"
                variant="outlined"
                size="small"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
              />
              <TextField
                sx={(theme) => ({
                  width: "100%",
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    background: theme.backgroundColor.blackWhite2,
                    color: theme.colorText.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.colorText.primary,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#c1c1c1",
                  },
                })}
                id="email"
                label="email"
                variant="outlined"
                size="small"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />

              <TextField
                sx={(theme) => ({
                  width: "100%",
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    background: theme.backgroundColor.blackWhite2,
                    color: theme.colorText.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.colorText.primary,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#c1c1c1",
                  },
                })}
                id="address"
                label="Địa chỉ"
                size="small"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
              />
              <TextField
                sx={(theme) => ({
                  width: "100%",
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    background: theme.backgroundColor.blackWhite2,
                    color: theme.colorText.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.colorText.primary,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#c1c1c1",
                  },
                })}
                id="note"
                label="Ghi chú"
                multiline
                rows={4}
                name="note"
                value={formik.values.note}
                onChange={formik.handleChange}
              />
              <Accordion expanded={billAccordion === "panel1"}>
                <AccordionSummary
                  sx={() => ({
                    "& .MuiAccordionSummary-content": {
                      display: "block",
                    },
                    "& .Mui-expanded": {
                      minHeight: "auto",
                      margin: 0,
                      marginBottom: "5px",
                    },
                    padding: "0 10px 0",
                    height: "auto !important",
                    minHeight: "auto !important",
                  })}
                >
                  <FormControlLabel
                    value={expBillCompany}
                    control={
                      <Checkbox size="small" sx={{ color: "#c1c1c1" }} />
                    }
                    label="Xuất hóa đơn công ty"
                    onChange={(e) =>
                      handleChangeBillAccordion("panel1", e, formik)
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    sx={(theme) => ({
                      width: "100%",
                      marginBottom: "15px",
                      "& .MuiOutlinedInput-root": {
                        background: theme.backgroundColor.blackWhite2,
                        color: theme.colorText.primary,
                      },
                      "& .MuiInputLabel-root": {
                        color: theme.colorText.primary,
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#c1c1c1",
                      },
                    })}
                    id="nameCompany"
                    label="Tên công ty"
                    variant="outlined"
                    size="small"
                    name="nameCompany"
                    value={formik.values.nameCompany}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.nameCompany &&
                      Boolean(formik.errors.nameCompany)
                    }
                  />
                  <TextField
                    sx={(theme) => ({
                      width: "100%",
                      marginBottom: "15px",
                      "& .MuiOutlinedInput-root": {
                        background: theme.backgroundColor.blackWhite2,
                        color: theme.colorText.primary,
                      },
                      "& .MuiInputLabel-root": {
                        color: theme.colorText.primary,
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#c1c1c1",
                      },
                    })}
                    id="address"
                    label="Địa chỉ"
                    variant="outlined"
                    size="small"
                    name="addressCompany"
                    value={formik.values.addressCompany}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.addressCompany &&
                      Boolean(formik.errors.addressCompany)
                    }
                  />
                  <TextField
                    sx={(theme) => ({
                      width: "100%",
                      marginBottom: "15px",
                      "& .MuiOutlinedInput-root": {
                        background: theme.backgroundColor.blackWhite2,
                        color: theme.colorText.primary,
                      },
                      "& .MuiInputLabel-root": {
                        color: theme.colorText.primary,
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#c1c1c1",
                      },
                    })}
                    id="taxCode"
                    label="Mã số thuế"
                    variant="outlined"
                    size="small"
                    name="texCodeCompany"
                    value={formik.values.texCodeCompany}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.texCodeCompany &&
                      Boolean(formik.errors.texCodeCompany)
                    }
                  />
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          <Box className="item-col-form">
            <Typography
              variant="h7"
              component={"div"}
              className={`title-col`}
              sx={(theme) => ({
                background: theme.backgroundColor.secondary,
              })}
            >
              Phương thức thanh toán
            </Typography>
            <Box className="group-method">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={formik.values.payMethod}
                name="payMethod"
                onChange={formik.handleChange}
              >
                <Accordion expanded={payMethodAccordion === "panel1"}>
                  <AccordionSummary
                    sx={(theme) => ({
                      "& .MuiAccordionSummary-content": {
                        display: "block",
                      },
                      "& .Mui-expanded": {
                        minHeight: "auto",
                        margin: 0,
                        marginBottom: "5px",
                      },
                      padding: "0 10px 0",
                      height: "auto !important",
                      minHeight: "auto !important",
                    })}
                  >
                    <FormControlLabel
                      value="Thanh toán khi nhận hàng"
                      control={<Radio size="small" sx={{ color: "#c1c1c1" }} />}
                      label="Thanh toán khi nhận hàng"
                      onChange={() => handleChangePayMethodAccordion("panel1")}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box className="box-detail">
                      <Typography>
                        Khi nhận hàng, quý khách được kiểm tra hàng trước khi
                        thanh toán
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={payMethodAccordion === "panel2"}>
                  <AccordionSummary
                    sx={(theme) => ({
                      "& .MuiAccordionSummary-content": {
                        display: "block",
                      },
                      "& .Mui-expanded": {
                        minHeight: "auto",
                        margin: 0,
                        marginBottom: "5px",
                      },
                      padding: "0 10px 0",
                      height: "auto !important",
                      minHeight: "auto !important",
                    })}
                  >
                    <FormControlLabel
                      value="Chuyển khoản"
                      control={<Radio size="small" sx={{ color: "#c1c1c1" }} />}
                      label="Chuyển khoản"
                      onChange={() => handleChangePayMethodAccordion("panel2")}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box className="box-detail">
                      <Typography>
                        1. Ngân hàng TMCP Á Châu - PGD Hoàng Cầu (ACB) <br /> +
                        Số TK:223688888 <br /> + Chủ TK: Quety vip pro
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </RadioGroup>
            </Box>
          </Box>
          <Box className="item-col-form">
            <Typography
              variant="h7"
              component={"div"}
              className={`title-col`}
              sx={(theme) => ({
                background: theme.backgroundColor.secondary,
              })}
            >
              Tổng tiền
            </Typography>
            <Box className="group-total">
              <Box className="item-tex">
                <Typography>Tổng cộng</Typography>
                <Typography>{formatCurrency(totalCart)} đ</Typography>
              </Box>
              <Box className="item-tex">
                <Typography>Phí vận chuyển</Typography>
                <Typography> đ</Typography>
              </Box>
              <Box className="item-tex">
                <Typography variant="h7">Thành tiền</Typography>
                <Typography variant="h6" sx={{ color: "red" }}>
                  {formatCurrency(totalCart)} đ
                </Typography>
              </Box>
            </Box>
            <Box className="group-btn">
              <Box
                className={`btn`}
                sx={(theme) => ({
                  background: theme.palette.primary.main,
                })}
              >
                <Typography
                  sx={(theme) => ({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 12,
                    background: " #155aa4",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    color: `${theme.colorText.secondary} !important`,
                  })}
                >
                  <SvgIcon component={LibraryBooksIcon} />
                  <Box className="text-sm">Tải file excel</Box>
                </Typography>
                {/* <ReactHtmlTableToExcel
                  id="test-table-xls-button"
                  className="download-table-xls-button"
                  table="table-to-xls"
                  filename="Bao_gia"
                  sheet="tablexls"
                  buttonText="Download as XLS"
                /> */}
              </Box>
              <Box
                className={`btn`}
                sx={(theme) => ({
                  background: theme.palette.primary.main,
                })}
              >
                <Typography
                  sx={(theme) => ({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: `${theme.colorText.secondary} !important`,
                  })}
                  onClick={handlePrint}
                >
                  <SvgIcon component={PrintIcon} />
                  <Box className="text-sm">In báo giá</Box>
                </Typography>
              </Box>
              <Box component="button" type="submit" className="btn">
                <Typography
                  sx={(theme) => ({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: `${theme.colorText.secondary} !important`,
                  })}
                >
                  {/* {isLoading ? (
                    <Box className="loading-submit">
                      <CircularProgress />
                    </Box>
                  ) : (
                    <SvgIcon component={CheckIcon} />
                  )} */}
                  <Box className="text-sm">Đặt mua</Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
      <Box className="export-excel" sx={{ display: "none" }}>
        <Box ref={componentRef}>
          hihi
          {/* <UserOrder /> */}
        </Box>
      </Box>
    </>
  );
};

export default FormCart;
