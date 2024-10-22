import {
  Box,
  Button,
  Link,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Breadcrumb from "@/components/Breadcrumb";
import { NavLink, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import "./styles.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import LoginIcon from "@mui/icons-material/Login";
import { loginSuccess, setAUTH } from "@/page/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import authApi from "@/api/auth";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Email chưa đúng định dạng")
    .required("Bạn chưa nhập Email"),
  password: yup
    .string("Enter your Password")
    .min(8, "Mật khẩu quá ngắn")
    .required("Bạn chưa nhập Mật khẩu"),
});
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const dataLogin = {
        account: values.email,
        password: values.password,
      };
      login(dataLogin);
    },
  });

  const login = async (payload) => {
    try {
      setLoading(true);
      const res: RegisterResponse = await authApi.login(payload);

      if (res.success) {
        setError(null);
        localStorage.setItem("accessToken", res.accessToken);
        const userResponse = await authApi.getUser();
        if (userResponse.success) {
          dispatch(setAUTH(userResponse));
          navigate("/account");
        } else {
          setError("Lỗi get user");
        }
      }
    } catch (error) {
      setError(error.message || "lỗi login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="page-login">
      <Breadcrumb path="dang-nhap" namePage="Đăng nhập" />
      <Box className="wrap-label">
        <Box
          className={`container-form`}
          sx={(theme) => ({
            background: theme.backgroundColor.blackWhite,
          })}
        >
          <Box className="form-user">
            <Box className="form-user__header">
              <Box className="form-user__header--title"></Box>
              <Link
                className="form-user__header--dangky"
                to="/dang-ky"
                component={NavLink}
              >
                <Typography>
                  Nếu bạn chưa có tài khoản vui lòng{" "}
                  <span>Đăng ký tài khoản</span>
                </Typography>
              </Link>
            </Box>
            <Box
              className={`cont_form`}
              sx={(theme) => ({
                background: theme.backgroundColor.blackWhite2,
                boxShadow: theme.boxShadow.main,
              })}
            >
              <Box className="cont_form--left">
                <Box
                  className={`cont_form__title`}
                  sx={(theme) => ({
                    color: theme.palette.secondary.main,
                  })}
                >
                  <SvgIcon component={PersonIcon} /> Đăng nhập bằng email đã
                  đăng ký
                </Box>
                <Box className="form-login">
                  <form onSubmit={formik.handleSubmit}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      size={"small"}
                      variant="outlined"
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
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      id="password"
                      name="password"
                      label="Mật khẩu"
                      variant="outlined"
                      type={"password"}
                      size={"small"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
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
                    />
                    {error && (
                      <Box className="showError">
                        <ReportGmailerrorredIcon fontSize="small" />
                        {error}
                      </Box>
                    )}
                    <LoadingButton
                      loading={loading}
                      loadingPosition="start"
                      startIcon={<LoginIcon />}
                      type="submit"
                      variant="contained"
                      size="small"
                      sx={{
                        fontSize: "14px !important",
                        "&.Mui-disabled": {
                          backgroundColor: "white",
                          color: "#000000a1",
                        },
                      }}
                    >
                      Đăng nhập
                    </LoadingButton>
                  </form>
                </Box>
              </Box>
              <Box className="cont_form--right">
                <Box
                  className={`cont_form__title`}
                  sx={(theme) => ({
                    color: theme.palette.secondary.main,
                  })}
                >
                  <SvgIcon component={HelpIcon} /> Đăng nhập bằng email đã đăng
                  ký
                </Box>
                <Typography className="text" sx={{ marginBottom: "10px" }}>
                  Đăng nhập để theo giỏi thông tin đơn hàng của bạn
                </Typography>
                <Typography className="text">
                  Nếu bạn gặp khó khăn trong lúc đang ký thì xin vui lòng liên
                  hệ tới số 0988888888 hoặc SMS tới để được hộ trợ
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
