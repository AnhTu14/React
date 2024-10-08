import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import commonSettings2 from "./global.ts";
// Định nghĩa các màu sắc của theme
const lightTheme = {
  colorBrandingLight: "#155aa4",
  colorBrandingLight2: "#2772c3",
  filterIcon: "none",
  color: "#253449",
  gold: "#F8CC82",
  gray: "#A3A3A3",
  colorTextBranding: "#155aa4",
  colorLight: "#fff",
  blueish_gray: "#768299",
  textHighlightColor: "#3BA04B", // "#F4D092",
  backgroundColor: "#fff",
  backgroundColor2: "#ebebeb",
  backgroundGradient: "linear-gradient(100deg, #ff6700 0%, #ffb300 100%);",
  paperBg: "#FFFFFF",
  modalBg: "#FAFAFAEF",
  popoverBg: "rgba(255, 255, 255, 0.95)",
  menuBg: "rgba(255, 255, 255, 0.5)",
  backdropBg: "rgba(200, 200, 200, 0.4)",
  largeTextColor: "#08971e",
  activeLinkColor: "#222222",
  activeLinkSvgColor:
    "invert(64%) sepia(11%) saturate(934%) hue-rotate(157deg) brightness(90%) contrast(86%)",
  primaryButtonBG: "#3BA04B",
  primaryButtonHoverBG: "#08971e",
  primaryButtonHoverColor: "#FCFCFC",
  secondaryButtonHoverBG: "rgba(54, 56, 64, 1)",
  outlinedPrimaryButtonHoverBG: "#F8CC82",
  outlinedPrimaryButtonHoverColor: "#FCFCFC",
  outlinedSecondaryButtonHoverBG: "#FCFCFC",
  outlinedSecondaryButtonHoverColor: "#FCFCFC",
  containedSecondaryButtonHoverBG: "#FCFCFC33",
  graphStrokeColor: "rgba(37, 52, 73, .2)",
  colorBorderLine: "#c1c1c1",
};
const darkTheme = {
  colorBrandingLight: "#155aa4",
  colorBrandingLight2: "#2772c3",
  filterIcon: "brightness(0) invert(1)",
  color: "#fff",
  gold: "#F8CC82",
  gray: "#A3A3A3",
  colorTextBranding: "#155aa4",
  colorLight: "#fff",
  blueish_gray: "#768299",
  textHighlightColor: "#3BA04B", // "#F4D092",
  backgroundColor: "#121212",
  backgroundColor2: "#252525",
  backgroundColor3: "#262c48",
  // background:
  // "radial-gradient(circle at 25% 0%, rgba(227,255,240,.5), rgba(227,255,240,0) 50%), radial-gradient(circle at 80% 80%, rgba(131,165,203,.5), rgba(131,165,203,0) 50%)",
  backgroundGradient: "linear-gradient(100deg, #ff6700 0%, #ffb300 100%);",
  paperBg: "#FFFFFF",
  modalBg: "#FAFAFAEF",
  popoverBg: "rgba(255, 255, 255, 0.95)",
  menuBg: "rgba(255, 255, 255, 0.5)",
  backdropBg: "rgba(200, 200, 200, 0.4)",
  largeTextColor: "#08971e",
  activeLinkColor: "#222222",
  activeLinkSvgColor:
    "invert(64%) sepia(11%) saturate(934%) hue-rotate(157deg) brightness(90%) contrast(86%)",
  // primaryButtonBG: "#08971e",
  primaryButtonBG: "#3BA04B",
  primaryButtonHoverBG: "#08971e",
  // these need fixing
  primaryButtonHoverColor: "#FCFCFC",
  secondaryButtonHoverBG: "rgba(54, 56, 64, 1)",
  outlinedPrimaryButtonHoverBG: "#F8CC82",
  outlinedPrimaryButtonHoverColor: "#FCFCFC",
  outlinedSecondaryButtonHoverBG: "#FCFCFC",
  outlinedSecondaryButtonHoverColor: "#FCFCFC",
  containedSecondaryButtonHoverBG: "#FCFCFC33",
  graphStrokeColor: "rgba(37, 52, 73, .2)",
  colorBorderLine: "#c1c1c1",
};

export const light = responsiveFontSizes(
  createTheme(
    commonSettings2,
    {
      palette: {
        primary: {
          main: lightTheme.colorBrandingLight,
          paper: lightTheme.paperBg,
        },
        secondary: {
          main: lightTheme.colorBrandingLight2,
        },
      },
      colorText: {
        primary: lightTheme.color,
        secondary: lightTheme.colorLight,
        branding: lightTheme.colorTextBranding,
        changeColorBrand: lightTheme.colorBrandingLight,
      },
      backgroundColor: {
        primary: lightTheme.backgroundColor,
        secondary: lightTheme.backgroundColor2,
        gradient: lightTheme.backgroundGradient,
        blackWhite: lightTheme.colorLight,
        footerBot: lightTheme.colorBrandingLight,
        changeBgBrand2: lightTheme.colorBrandingLight2,
        gradientMore: "linear-gradient(rgba(255, 255, 255, 0), white)",
        customPd: "none",
        search: "#fff",
      },
      border: {
        main: `solid 1px ${lightTheme.colorBorderLine}`,
        borderIp: "#c1c1c1",
      },
      iconNav: {
        main: lightTheme.filterIcon,
      },
      header: {
        background: "#2772c3",
      },
      headerTop: {
        background: "#155aa4",
      },
      boxShadow: {
        main: "0 0 9px 1px #b7b7b7",
      },
    },
    {
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              fontSize: "14px",
              backgroundColor: "#f1f1f1",
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: lightTheme.color,
            },
          },
        },
      },
    }
  )
);
export const dark = responsiveFontSizes(
  createTheme(
    commonSettings2,
    {
      palette: {
        primary: {
          main: darkTheme.colorBrandingLight,
          paper: darkTheme.paperBg,
        },
        secondary: {
          main: darkTheme.colorBrandingLight2,
        },
      },
      colorText: {
        primary: darkTheme.color,
        secondary: darkTheme.colorLight,
        branding: darkTheme.colorTextBranding,
        changeColorBrand: darkTheme.color,
      },
      backgroundColor: {
        primary: darkTheme.backgroundColor,
        secondary: darkTheme.backgroundColor2,
        gradient: darkTheme.backgroundGradient,
        search: darkTheme.backgroundColor2,
        blackWhite: darkTheme.backgroundColor,
        blackWhite2: darkTheme.backgroundColor2,
        blackWhite3: darkTheme.backgroundColor2,
        footerBot: darkTheme.backgroundColor2,
        changeBgBrand2: darkTheme.backgroundColor,
        customPd: darkTheme.backgroundColor2,
        gradientMore: "linear-gradient(rgba(255, 255, 255, 0), black)",
      },
      border: {
        main: `solid 1px ${darkTheme.colorBorderLine}`,
        search: `solid 1px #ffffff75`,
        borderIp: "#000",
      },
      iconNav: {
        main: darkTheme.filterIcon,
      },
      header: {
        background: "#121212",
      },
      headerTop: {
        background: "#252525",
      },
      boxShadow: {
        main: "none",
      },
    },
    {
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              fontSize: "14px",
              backgroundColor: "#252525",
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              color: "#fff",
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: darkTheme.color,
            },
          },
        },
      },
    }
  )
);
