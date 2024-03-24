/*
 * File: HomeContent.jsx
 * Author: Joseph Koh
 * Description: Represents the home content
 */

import { Stack, Typography } from "@mui/material";
import { ChatButton } from "../ui/ChatButton";

export const HomeContent = () => {
  return (
    // Home content container
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      paddingX={4}
    >
      {/* Title */}
      <Typography variant="h1" fontWeight="bold" textAlign="center">
        ChatterBox
      </Typography>

      {/* Subtitle */}
      <Typography variant="h4" textAlign="center" marginBottom={3}>
        Your Gateway to Endless Conversations
      </Typography>

      {/* Chat button */}
      <ChatButton />
    </Stack>
  );
};
