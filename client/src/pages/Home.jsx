/* File: Home.jsx
 * Author: Joseph Koh
 * Description: Represents the Home page
 */

import { Box, Stack, Typography } from "@mui/material";
import { color } from "../data/constants";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useState, useEffect } from "react";
import { Loading } from "../components/ui/Loading";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { ChatButton } from "../components/ui/ChatButton";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

export const Home = ({ socket, setSocket }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Create instance of useNavigate

  // Function to handle chat now button
  const handleChatNow = () => {
    setLoading(true);

    // Connect to webSocket server
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);
  };

  // useEffect to listen to socket
  useEffect(() => {
    if (socket) {
      // Chat-room listener
      socket.on("chat-room", (data) => {
        setLoading(false);
        navigate(`/chat/${data.roomId}`);
      });

      // Clean up listener on socket change or unmount
      return () => {
        socket.off("chat-room");
      };
    }
  }, [socket]);

  return loading ? (
    <>
      <Loading />
    </>
  ) : (
    <Box bgcolor={color.yellow}>
      {/* Header */}
      <Navbar />

      {/* Home content */}
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

      {/* Footer */}
      <Footer />
    </Box>
  );
};
