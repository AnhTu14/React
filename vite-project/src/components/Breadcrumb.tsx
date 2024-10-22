import { Box, Link, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToSlug } from "utils/format";
import _ from "lodash";
import getBreadcrumbsCategory from "@/utils/getBreadcrumbsCategory";

const CategoryProduct = ({ categoryId }) => {
  const dataCategoryProduct = useSelector((state) => state.categoryProducts);
  const [breadCrumb, setBreadCrumb] = useState([]);
  // console.log(categoryId);
  useEffect(() => {
    const isBreadCrumb = getBreadcrumbsCategory(
      dataCategoryProduct,
      categoryId
    ).breadcrumbs;
    setBreadCrumb(isBreadCrumb);
  }, [categoryId, dataCategoryProduct]);
  return (
    <>
      {breadCrumb.length > 0 && (
        <Box
          sx={(theme) => ({
            background: theme.backgroundColor.blackWhite2,
            marginBottom: "15px",
          })}
        >
          <Box className="wrap-label">
            <Box
              sx={() => ({
                // display: "flex",
                alignItems: "center",
                padding: "10px 0",
              })}
            >
              <Link to="/" component={NavLink}>
                Trang chủ
              </Link>
              {breadCrumb.map((item, index) => (
                <Link
                  key={index}
                  to={`/danh-muc-san-pham/`}
                  component={NavLink}
                >
                  <Typography
                    sx={() => ({
                      padding: "0 10px",
                    })}
                    component={"span"}
                  >
                    /
                  </Typography>
                  <Typography component={"span"}>{item.name}</Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

const Product = (props) => {
  const dataCategoryProduct = useSelector((state) => state.categoryProducts);
  const { product } = props;
  const idCategory = _.findLast(product.categoryInfo, "id").id;
  const [breadCrumb, setBreadCrumb] = useState([]);

  useEffect(() => {
    const isBreadCrumb = getBreadcrumbsCategory(
      dataCategoryProduct,
      idCategory
    ).breadcrumbs;
    setBreadCrumb(isBreadCrumb);
  }, [product]);

  return breadCrumb.length > 0 ? (
    <Box
      sx={(theme) => ({
        background: theme.backgroundColor.blackWhite2,
        marginBottom: "15px",
      })}
    >
      <Box className="wrap-label">
        <Box
          sx={() => ({
            // display: "flex",
            alignItems: "center",
            padding: "10px 0",
          })}
        >
          <Link to="/" component={NavLink}>
            Trang chủ
          </Link>
          {breadCrumb.map((item, index) => (
            <Link key={index} to={`/danh-muc-san-pham`} component={NavLink}>
              <Typography
                sx={() => ({
                  padding: "0 10px",
                })}
                component={"span"}
              >
                /
              </Typography>
              <Typography component={"span"}>{item.name}</Typography>
            </Link>
          ))}
          <Link to={`/san-pham/`} component={NavLink}>
            <Typography
              sx={() => ({
                padding: "0 10px",
              })}
              component={"span"}
            >
              /
            </Typography>
            <Typography component={"span"}>{product.productName}</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  ) : (
    ""
  );
};

const PathDefault = (props) => {
  const { path, namePage } = props;
  return (
    <Box
      sx={(theme) => ({
        background: theme.backgroundColor.blackWhite2,
        marginBottom: "15px",
      })}
    >
      <Box className="wrap-label">
        <Box
          sx={() => ({
            // display: "flex",
            alignItems: "center",
            padding: "10px 0",
          })}
        >
          <Link to="/" component={NavLink}>
            Trang chủ
          </Link>
          <Link to={`/${path}`} component={NavLink}>
            <Typography
              sx={() => ({
                padding: "0 10px",
              })}
              component={"span"}
            >
              /
            </Typography>
            <Typography component={"span"}>{namePage}</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const CategoryArticle = (props) => {
  const { idCategory, nameCategory } = props;

  return (
    <Box
      sx={(theme) => ({
        background: theme.backgroundColor.blackWhite2,
        marginBottom: "15px",
      })}
    >
      <Box className="wrap-label">
        <Box
          sx={() => ({
            // display: "flex",
            alignItems: "center",
            padding: "10px 0",
          })}
        >
          <Link to="/" component={NavLink}>
            Trang chủ
          </Link>
          <Link to={`/tin-tuc`} component={NavLink}>
            <Typography
              sx={() => ({
                padding: "0 10px",
              })}
              component={"span"}
            >
              /
            </Typography>
            <Typography component={"span"}>Tin tức</Typography>
          </Link>
          <Link to={`/tin-tuc/danh-muc/`} component={NavLink}>
            <Typography
              sx={() => ({
                padding: "0 10px",
              })}
              component={"span"}
            >
              /
            </Typography>
            <Typography component={"span"}>{nameCategory}</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const ArticleDetailBread = (props) => {
  const { category, idArticle, nameArticle } = props;
  return (
    <Box
      sx={(theme) => ({
        background: theme.backgroundColor.blackWhite2,
        marginBottom: "15px",
      })}
    >
      <Box className="wrap-label">
        <Box
          sx={() => ({
            // display: "flex",
            alignItems: "center",
            padding: "10px 0",
          })}
        >
          <Link to="/" component={NavLink}>
            Trang chủ
          </Link>
          <Link to={`/tin-tuc/danh-muc/`} component={NavLink}>
            <Typography
              sx={() => ({
                padding: "0 10px",
              })}
              component={"span"}
            >
              /
            </Typography>
            <Typography component={"span"}>{category.title}</Typography>
          </Link>
          <Link to={`/tin-tuc/`} component={NavLink}>
            <Typography
              sx={() => ({
                padding: "0 10px",
              })}
              component={"span"}
            >
              /
            </Typography>
            <Typography component={"span"}>{nameArticle}</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default function Breadcrumb(props) {
  const { path } = props;

  switch (path) {
    case "categoryProduct":
      return <CategoryProduct {...props} />;

    case "product":
      return <Product {...props} />;

    case "categotyArticle":
      return <CategoryArticle {...props} />;

    case "articleDetail":
      return <ArticleDetailBread {...props} />;

    default:
      return <PathDefault {...props} />;
  }
}
