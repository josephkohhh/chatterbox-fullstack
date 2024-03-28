/*
 * File: SendButton.jsx
 * Author: Joseph Koh
 * Description: Represents the send button
 */

import { Button } from "@mui/material";
import { color } from "../../data/constants";

export const SendButton = ({ onClick }) => {
  return (
    // Login button
    <Button
      disableRipple
      disableElevation
      type="submit"
      variant="contained"
      size="large"
      sx={{
        height: "55px",
        color: color.black,
        bgcolor: color.yellow,
        borderRadius: "10px",
        "&:hover": { bgcolor: color.darkyellow },
      }}
      onClick={onClick}
    >
      Send
    </Button>
  );
};
