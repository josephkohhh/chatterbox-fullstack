/*
 * File: MessageBubble.jsx
 * Author: Joseph Koh
 * Description: Represents the message bubble
 */

import { Paper, Typography } from "@mui/material";
import { color } from "../../data/constants";

export const MessageBubble = ({ isCurrentUser, children }) => {
  const bubbleStyle = {
    padding: "10px",
    maxWidth: "70%",
    margin: "10px 10px",
    backgroundColor: isCurrentUser ? color.yellow : color.lightyellow,
    alignSelf: isCurrentUser ? "flex-end" : "flex-start",
  };
  return (
    <Paper variant="outlined" style={bubbleStyle}>
      <Typography variant="body2">{children}</Typography>
    </Paper>
  );
};
