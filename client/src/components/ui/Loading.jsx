/*
 * File: Loading.jsx
 * Author: Joseph Koh
 * Description: Represents the loading screen
 */

import { Box, Typography } from "@mui/material";
import searchIcon from "../../assets/searchIcon.gif";
import { color } from "../../data/constants";

export const Loading = () => {
  const imageStyle = {
    boxSizing: "border-box",
    objectFit: "cover",
  };
  return (
    <Box bgcolor={color.yellow}>
      <Box
        sx={{
          width: { xs: "80%", lg: "80%" },
          direction: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          paddingY: "200px",
        }}
      >
        {/* Loading icon container */}
        <Box
          sx={{
            width: { xs: "80%", sm: "550px", md: "600px" },
            height: { xs: "200px", sm: "300px", md: "300px" },
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={searchIcon} alt="search icon" style={imageStyle} />
        </Box>
        {/* Sub text */}
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Searching for users...
          <br />
          This may take a while {"(:"}
        </Typography>
      </Box>
    </Box>
  );
};
