import { Box, TextField, Typography } from "@mui/material";
import LayoutAccount from "@/components/LayoutAccount";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import "@/page/Account/styles.scss";
import { useSnackbar } from "notistack";
import authApi from "@/api/auth";
import { Helmet } from "react-helmet-async";

const validationSchema = yup.object({
  oldPassword: yup
    .string("Enter your Password")
    .required("Bạn chưa nhập Mật khẩu"),
  newPassword: yup
    .string("Enter your Password")
    .min(8, "Mật khẩu quá ngắn")
    .required("Bạn chưa nhập mật khẩu mới"),
  confirmNewPassword: yup
    .string("Enter your Password")
    .required("Bạn chưa nhập lại Mật khẩu mới")
    .oneOf([yup.ref("newPassword"), null], "Nhập lại mật khẩu chưa đúng"),
});

export default function ChangePassword() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const update = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };
      console.log(update, "check update password");
      changePassword(update);
    },
  });

  const changePassword = async (payload) => {
    try {
      setLoading(true);
      const res = await authApi.changeUser(payload);
      console.log("ressss", res);
      if (res.success) {
        setError(null);
        enqueueSnackbar("Thay đổi mật khẩu thành công", {
          variant: "success",
        });
      }
    } catch (error) {
      console.log("error", error);
      setError(
        error.response.data.message || "An error occurred, please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="page-profile">
      <Helmet>
        <title>Thay đổi mật khẩu</title>
      </Helmet>
      <LayoutAccount>
        <Box className="wrap-profile">
          <Typography className="title-info">Thông tin tài khoản</Typography>
          <Box className="wrap-form">
            <form onSubmit={formik.handleSubmit}>
              <Box className="item-ip">
                <Typography className="title-ip">
                  Mật khẩu hiện tại:{" "}
                </Typography>
                <Box className="left-ip">
                  <TextField
                    id="oldPassword"
                    name="oldPassword"
                    // label="Email"
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
                      formik.touched.oldPassword &&
                      Boolean(formik.errors.oldPassword)
                    }
                    helperText={
                      formik.touched.oldPassword && formik.errors.oldPassword
                    }
                  />
                </Box>
              </Box>
              <Box className="item-ip">
                <Typography className="title-ip">Mật khẩu mới: </Typography>
                <Box className="left-ip">
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
                    id="newPassword"
                    name="newPassword"
                    // label="Họ tên"
                    size={"small"}
                    variant="outlined"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.newPassword &&
                      Boolean(formik.errors.newPassword)
                    }
                    helperText={
                      formik.touched.newPassword && formik.errors.newPassword
                    }
                  />
                </Box>
              </Box>
              <Box className="item-ip">
                <Typography className="title-ip">
                  Nhập lại mật khẩu mới:{" "}
                </Typography>
                <Box className="left-ip">
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
                    id="confir"
                    // label="Số điện thoại"
                    name="confirmNewPassword"
                    // type="number"
                    variant="outlined"
                    size={"small"}
                    value={formik.values.confirmNewPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmNewPassword &&
                      Boolean(formik.errors.confirmNewPassword)
                    }
                    helperText={
                      formik.touched.confirmNewPassword &&
                      formik.errors.confirmNewPassword
                    }
                  />
                </Box>
              </Box>
              {error && (
                <Box className="showError">
                  <ReportGmailerrorredIcon fontSize="small" />
                  {error}
                </Box>
              )}
              <LoadingButton
                loading={loading}
                loadingPosition="start"
                startIcon={<PublishedWithChangesIcon />}
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
                Lưu thay đổi
              </LoadingButton>
            </form>
          </Box>
        </Box>
      </LayoutAccount>
    </Box>
  );
}
