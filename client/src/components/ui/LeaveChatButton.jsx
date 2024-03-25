/*
 * File: LeaveChatButton.jsx
 * Author: Joseph Koh
 * Description: Represents the leave chat button
 */

import { Button } from "@mui/material";

export const LeaveChatButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="error"
      disableRipple
      size="small"
      onClick={onClick}
    >
      Leave Chat
    </Button>
  );
};
