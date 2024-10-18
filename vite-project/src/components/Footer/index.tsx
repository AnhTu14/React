import { Box } from "@mui/material";
import FooterBot from "@/components/Footer/FooterBot";
import FooterCenter from "@/components/Footer/FooterCenter";
import FooterTop from "@/components/Footer/FooterTop";
import "./styles.scss";

export default function Footer() {
  return (
    <Box component={"footer"}>
      <FooterTop />
      <FooterCenter />
      <FooterBot />
    </Box>
  );
}
