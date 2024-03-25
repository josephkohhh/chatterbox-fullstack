/*
 * File: Footer.jsx
 * Author: Joseph Koh
 * Description: Represents the app footer navbar
 */

import { Box, Stack, Typography } from "@mui/material";
import { color, navLinks } from "../../data/constants";
import { NavButtonLinks } from "../ui/NavButtonLinks";

export const Footer = () => {
  return (
    // Footer
    <Box
      sx={{
        width: "100%",
        bgcolor: color.black,
        marginTop: "100px",
        minHeight: "180px",
        borderRadius: "0 70px 0 0",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        paddingTop={8}
        paddingX={{ xs: 4, md: 8 }}
      >
        {/* Title - small screen and above */}
        <Stack
          display={{ xs: "none", sm: "flex" }}
          borderRight={"1px solid white"}
        >
          <Typography variant="h3" paddingRight={4} color={color.white}>
            ChatterBox
          </Typography>
        </Stack>

        {/* Title - xs screen only */}
        <Stack display={{ xs: "flex", sm: "none" }}>
          <Typography variant="h3" color={color.white}>
            ChatterBox
          </Typography>
        </Stack>

        {/* Middle screen and above */}
        <Stack display={{ xs: "none", md: "flex" }} paddingX={4} flexGrow={1}>
          <Typography variant="body2" color={color.white}>
            © ChatterBox. 2024, Singapore. All rights reserved Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Corporis, ad fuga.
            Animi pariatur corrupti distinctio, maiores sapiente ipsa similique
            id laudantium amet
          </Typography>
        </Stack>

        {/* Nav link buttons */}
        <Stack direction="row" spacing={2} paddingLeft={{ xs: 0, sm: 2 }}>
          {navLinks.map((link, index) => (
            <NavButtonLinks color={color.white} key={index}>
              {link.label}
            </NavButtonLinks>
          ))}
        </Stack>

        {/* Small screen only */}
        <Stack display={{ xs: "flex", md: "none" }} mt={1} mb={4}>
          <Typography variant="caption" color={color.white}>
            © ChatterBox. 2024, Singapore. All rights reserved Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Corporis, ad fuga.
            Animi pariatur corrupti distinctio, maiores sapiente ipsa similique
            id laudantium amet
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
