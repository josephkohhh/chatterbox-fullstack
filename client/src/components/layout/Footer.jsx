/*
 * File: Footer.jsx
 * Author: Joseph Koh
 * Description: Represents the app footer navbar
 */

import { Box } from "@mui/material";
import { color } from "../../data/constants";

export const Footer = () => {
  return (
    // Footer
    <Box
      sx={{
        width: "100%",
        bgcolor: color.black,
        marginTop: "100px",
        height: "180px",
      }}
    ></Box>
  );
};
