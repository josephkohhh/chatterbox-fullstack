/*
 * File: Navbar.jsx
 * Author: Joseph Koh
 * Description: Represents the app navbar
 */

import { AppBar, Toolbar, Box, Stack } from "@mui/material";
import { color, navLinks } from "../../data/constants";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { NavButtonLinks } from "../ui/NavButtonLinks";
import { LoginButton } from "../ui/LoginButton";
import { MobileMenu } from "../ui/MobileMenu";

export const Navbar = () => {
  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          bgcolor: color.yellow,
          height: "100px",
        }}
      >
        <Toolbar>
          {/* Navbar content container */}
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            paddingX={5}
            marginTop="30px"
          >
            {/* Brand logo */}
            <QuestionAnswerRoundedIcon
              sx={{ fontSize: "50px", color: color.black }}
            />

            {/* Nav link buttons */}
            <Stack
              direction="row"
              flexGrow={1}
              spacing={5}
              display={{ xs: "none", sm: "flex" }}
            >
              {navLinks.map((link, index) => (
                <NavButtonLinks key={index}>{link.label}</NavButtonLinks>
              ))}
            </Stack>

            {/* Login button */}
            <Stack display={{ xs: "none", sm: "flex" }}>
              <LoginButton />
            </Stack>

            {/* Mobile menu */}
            <Stack
              justifyContent="flex-end"
              display={{ xs: "flex", sm: "none" }}
            >
              <MobileMenu />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
