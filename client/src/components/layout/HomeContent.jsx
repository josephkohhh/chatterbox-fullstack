/*
 * File: HomeContent.jsx
 * Author: Joseph Koh
 * Description: Represents the home content
 */

import { Stack, Typography } from "@mui/material";
import { ChatButton } from "../ui/ChatButton";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { color } from "../../data/constants";
import WebSocket from "socket.io-client";
import { useNavigate } from "react-router-dom";

export const HomeContent = ({ setLoading }) => {
  const navigate = useNavigate(); // Create instance of useNavigate

  // Function to handle chat now button
  const handleChatNow = () => {
    setLoading(true);
    const socket = new WebSocket("http://localhost:3000"); // connect to socket IO server

    // Connected to chat room
    socket.on("chat-room", () => {
      setLoading(false);
      navigate("/chat");
    });
  };

  return (
    // Home content container
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      paddingX={4}
    >
      {/* Brand logo */}
      <QuestionAnswerRoundedIcon
        sx={{ fontSize: { xs: "80px", sm: "120px" }, color: color.black }}
      />

      {/* Title */}
      <Typography variant="h2" fontWeight="bold" textAlign="center">
        ChatterBox
      </Typography>

      {/* Subtitle */}
      <Typography variant="h5" textAlign="center" marginBottom={3}>
        Your Gateway to Endless Conversations
      </Typography>

      {/* Chat button */}
      <ChatButton onClick={handleChatNow} />
    </Stack>
  );
};
