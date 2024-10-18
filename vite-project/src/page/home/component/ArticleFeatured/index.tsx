import { Box, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ArticleSlide from "@/page/Home/component/ArticleSlide";
import { memo, useEffect, useState } from "react";

import news from "@/api/news";

function ArticleFeatured() {
  const [dataArticle, setdataArticle] = useState([]);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const params = {
          type: "featured",
          limit: 10,
        };
        const res = await news.getArticle(params);
        setdataArticle(res.article);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, []);
  return (
    <Box
      className={`block-articles`}
      sx={(theme) => ({
        background: theme.backgroundColor.primary,
      })}
    >
      <Box className="wrap-label">
        <Box className="head-article">
          <Box
            className={`title-article`}
            sx={(theme) => ({
              color: theme.colorText.changeColorBrand,
            })}
          >
            Tin nổi bật trong ngày
          </Box>
          <Link
            to={`/tin-tuc`}
            component={NavLink}
            className={`more-pd`}
            sx={(theme) => ({
              color: theme.colorText.changeColorBrand,
            })}
          >
            <Box component={"span"}>Xem tất cả</Box>
            <DoubleArrowIcon />
          </Link>
        </Box>
        <Box className="wrap-list">
          {dataArticle?.length > 0 ? <ArticleSlide data={dataArticle} /> : ""}
        </Box>
      </Box>
    </Box>
  );
}
export default memo(ArticleFeatured);
