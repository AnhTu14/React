import { Box, TextField, Typography } from "@mui/material";
import LayoutAccount from "@/components/LayoutAccount/index";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { IconsPage } from "@/const/images";
import Ellipsis from "@/components/Loading/Ellipsis";
import { Helmet } from "react-helmet-async";
import ReactImageUploading from "react-images-uploading";
import { setAUTH } from "@/page/Auth/authSlice";
import authApi from "@/api/auth";
import { uploadImage } from "@/api/commonApi";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Email chưa đúng định dạng")
    .required("Bạn chưa nhập Email"),
  name: yup
    .string("Enter your comment")
    .min(5, "Tên bạn quá ngắn")
    .required("Bạn chưa nhập tên"),
  phone: yup
    .string("Enter your phone")
    .matches(
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
      "Bạn chưa nhập đúng định dạng số điện thoại"
    )
    .required("Bạn chưa nhập số điện thoại"),
  address: yup
    .string("Enter your comment")
    .min(10, "Bạn chưa nhập đúng địa chỉ")
    .required("Bạn chưa nhập địa chỉ"),
});

export default function Account() {
  const [field, setField] = useState({
    userName: "",
    address: "",
    phone: "",
    email: "",
    avatar: "",
  });
  const { userName, address, phone, email, avatar } = field;
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const [loadingUploadImg, setLoadingUploadImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setField({
        ...field,
        userName: user.userName,
        address: user.address,
        phone: user.phone,
        email: user.email,
        avatar: !!user.avatar ? user.avatar : "",
      });
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      email: email,
      name: userName,
      phone: phone,
      address: address,
      avatar: avatar,
    },
    // enableReinitialze: true,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const update = {
        email: values.email,
        userName: values.name,
        phone: values.phone,
        address: values.address,
        avatar: avatar,
      };
      // console.log(register);
      updateUser(update);
    },
  });

  const updateUser = async (payload) => {
    try {
      setLoading(true);
      const res = await authApi.updateUser(payload);
      if (res.success) {
        setError(null);
        dispatch(
          setAUTH({
            isAuthenticated: true,
            user: res.user,
          })
        );
      }
    } catch (error) {
      if (error) {
        console.log(error.message);
        setError(error.message);
      } else {
        setError("An error occurred, please try again");
      }
    } finally {
      setLoading(false);
    }
  };
  const onChangeAvatar = async (imageList, addUpdateIndex) => {
    const image = imageList[0].dataURL.split(",")[1];
    try {
      setLoadingUploadImg(true);
      const res = await uploadImage(image);
      setField({ ...field, avatar: res.data.data.display_url });
    } catch (error) {
      setError(error.message || "An error occurred, please try again");
    } finally {
      setLoadingUploadImg(false);
    }
    console.log("2", imageList[0].dataURL.split(","));
    console.log(imageList[0].dataURL.split(",")[1]);
    console.log(imageList, addUpdateIndex);
  };
  return (
    <Box className="page-profile">
      <Helmet>
        <title>Tài khoản</title>
      </Helmet>
      <LayoutAccount>
        <Box
          className={`wrap-profile`}
          sx={(theme) => ({
            background: theme.backgroundColor.blackWhite,
          })}
        >
          <Typography className="title-info">Thông tin tài khoản</Typography>
          <Box className="wrap-form">
            <form onSubmit={formik.handleSubmit}>
              <Box className="item-ip">
                <Typography className="title-ip">Email: </Typography>
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
                    id="email"
                    name="email"
                    // label="Email"
                    size={"small"}
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>
              </Box>
              <Box className="item-ip">
                <Typography className="title-ip">Họ tên: </Typography>
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
                    id="name"
                    name="name"
                    // label="Họ tên"
                    size={"small"}
                    variant="outlined"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Box>
              </Box>
              <Box className="item-ip">
                <Typography className="title-ip">Số điện thoại: </Typography>
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
                    id="phone"
                    // label="Số điện thoại"
                    name="phone"
                    type="number"
                    variant="outlined"
                    size={"small"}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Box>
              </Box>
              <Box className="item-ip">
                <Typography className="title-ip">Địa chỉ: </Typography>
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
                    id="address"
                    // label="Địa chỉ"
                    name="address"
                    variant="outlined"
                    size={"small"}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
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
            <Box className="avatar-profile">
              <Box className={`wrap-img ${loadingUploadImg ? "loading" : ""}`}>
                {!!avatar ? (
                  <img src={field.avatar} />
                ) : (
                  <img src={IconsPage.Avatar} alt="" />
                )}
                {loadingUploadImg && (
                  <Box className="wrap-loading-img">
                    <Ellipsis />
                  </Box>
                )}
              </Box>
              <ReactImageUploading onChange={onChangeAvatar}>
                {({ onImageUpload, isDragging, dragProps }) => {
                  console.log({ dragProps });
                  return (
                    <Typography
                      className="camera"
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Chọn ảnh
                    </Typography>
                  );
                }}
              </ReactImageUploading>
            </Box>
          </Box>
        </Box>
      </LayoutAccount>
    </Box>
  );
}
