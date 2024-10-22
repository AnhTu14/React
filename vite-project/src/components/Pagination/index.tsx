import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";

export default function PaginationLiked(props) {
  // console.log(props, "check props");
  const { total, limit, handleChangePage } = props;
  const totalRows = Math.ceil(total / limit);
  const [page, setPage] = useState(1);

  const handleChangePageV2 = (page) => {
    handleChangePage(page);
    setPage(page);
  };

  useEffect(() => {
    setPage(1);
  }, [total]);

  return (
    <>
      {totalRows > 1 ? (
        <Box
          className="wrap-pagination"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Pagination
            sx={(theme) => ({
              margin: "10px",
              marginRight: "0 !important",
              "& .MuiPaginationItem-root": {
                background: theme.backgroundColor.blackWhite2,
                color: theme.colorText.primary,
                border: "none",
                "&.Mui-selected": {
                  background: theme.palette.primary.main,
                  color: "#fff",
                },
              },
            })}
            onChange={(e, page) => handleChangePageV2(page)}
            count={totalRows}
            variant="outlined"
            shape="rounded"
            color="primary"
            page={page}
          />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
