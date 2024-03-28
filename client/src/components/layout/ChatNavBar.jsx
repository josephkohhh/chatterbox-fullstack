/*
 * File: ChatNavBar.jsx
 * Author: Joseph Koh
 * Description: Represents the header for Chatroom
 */

import { AppBar, Toolbar, Typography } from "@mui/material";
import { color } from "../../data/constants";

export const ChatNavBar = () => {
  return (
    // Header
    <AppBar
      position="static"
      sx={{
        bgcolor: color.yellow,
        height: "10vh",
      }}
    >
      <Toolbar>
        {/* Brand title */}
        <Typography
          variant="h3"
          textAlign="center"
          color={color.black}
          flexGrow={1}
          py={2}
        >
          ChatterBox
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
