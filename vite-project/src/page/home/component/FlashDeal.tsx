import { Box, Link, SvgIcon } from "@mui/material";
import { IconsPage } from "contants/images";
import React from "react";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useQuery, useQueryClient } from "react-query";
import { getFlashDeal } from "contants/api";
import useLazyLoadGroup from "@/Hooks/useLazyLoadGroup";
import DealProductSlide from "./DealProductSlide";

const FlashDeal = () => {
  const { ref, scrollpoint } = useLazyLoadGroup();

  const queryClient = useQueryClient();

  const handleRefeshFetch = () => {
    queryClient.invalidateQueries({
      predicate: (query) => query.queryKey[0] === "flash deal",
    });
  };

  return (
    <Box className="box-flash-deal" ref={ref}>
      <Box className="wrap-label">
        {isLoading && <Box>Loading...</Box>}
        {dataDeal && days + hours + minutes + seconds > 0 && (
          <Box className="wrap-ct">
            <Box className="header-box-deal">
              <Box className="title-deal">
                <Box className="wrap-img">
                  <img className="icon-flash" src={IconsPage.Flash} />
                </Box>
                <Box className="text-flash">Flash Deal</Box>
              </Box>
              <Box className="time-left">
                <Box className="num">{days > 9 ? days : `0${days}`}</Box>
                <Box className="num">{hours > 9 ? hours : `0${hours}`}</Box>
                <Box className="num">
                  {minutes > 9 ? minutes : `0${minutes}`}
                </Box>
                <Box className="num">
                  {seconds > 9 ? seconds : `0${seconds}`}
                </Box>
              </Box>
              {/* <CountDownTime dateDeal={dataDeal.maxDateDeal} /> */}
              <Link className="more-deals" to="/flash-sale" component={NavLink}>
                Xem tất cả <SvgIcon component={KeyboardDoubleArrowRightIcon} />
              </Link>
            </Box>
            <Box className="wrap-pd">
              <DealProductSlide
                data={dataDeal.deals}
                refreshFetch={handleRefeshFetch}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FlashDeal;
