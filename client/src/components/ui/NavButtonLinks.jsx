/*
 * File: NavButtonLinks.jsx
 * Author: Joseph Koh
 * Description: Represents the nav button links
 */

import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const NavButtonLinks = ({ children, color, fontWeight }) => {
  const theme = useTheme();

  return (
    // Nav button links
    <Button
      disableRipple
      sx={{
        color: { color },
        fontWeight: { fontWeight },
        "&:hover": {
          textDecoration: "underline",
          textUnderlineOffset: "10px",
          bgcolor: "inherit",
        },
      }}
    >
      {children}
    </Button>
  );
};
