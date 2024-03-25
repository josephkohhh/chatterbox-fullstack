/*
 * File: MobileMenu.jsx
 * Author: Joseph Koh
 * Description: Represents the nav mobile menu for users
 */

import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export const MobileMenu = () => {
  // State and functions to handle open/close menu
  const [anchorEl, setAnchorEl] = useState(false);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget); // Function to handle opening menu
  const handleCloseMenu = () => setAnchorEl(false); // Function to handle closing menu

  // Effect to handle closing menu on window resize
  useEffect(() => {
    const handleResize = () => handleCloseMenu();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("listener", handleResize);
  }, []);
  return (
    <>
      {/* Icon button */}
      <IconButton onClick={handleOpenMenu}>
        <MenuRoundedIcon fontSize="large" />
      </IconButton>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem disabled>Login</MenuItem>
        <MenuItem>Code</MenuItem>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
      </Menu>
    </>
  );
};
