/*
 * File: LoginButton.jsx
 * Author: Joseph Koh
 * Description: Represents the login button
 */

import { Button } from "@mui/material";
import { color } from "../../data/constants";

export const LoginButton = ({ onClick }) => {
  return (
    // Login button
    <Button
      disableRipple
      disableElevation
      variant="contained"
      size="large"
      sx={{
        bgcolor: color.lightblack,
        borderRadius: "10px",
        "&:hover": { color: color.white, bgcolor: color.black },
      }}
      onClick={onClick}
    >
      Login
    </Button>
  );
};
