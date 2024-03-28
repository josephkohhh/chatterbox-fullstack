/* File: Chatroom.jsx
 * Author: Joseph Koh
 * Description: Manages the conversation between users
 */

import { Box, Stack, Typography, TextField, Avatar } from "@mui/material";
import { SendButton } from "../components/ui/SendButton";
import { color } from "../data/constants";
import { MessageBubble } from "../components/ui/MessageBubble";
import { LeaveChatButton } from "../components/ui/LeaveChatButton";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Chatroom = ({ socket }) => {
  const { roomId } = useParams();

  // Message states
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Function to handle message submission
  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("send_message", { message, roomId });

    setMessage(""); // Reset input

    // Append the sent message to the messages array
    setMessages([...messages, { content: message, isCurrentUser: true }]);
  };

  // useEffect to receive message from server
  useEffect(() => {
    console.log(messages);
    socket.on("receive_message", (data) => {
      // Append the received message to the messages array
      setMessages((prev) => [
        ...prev,
        { content: data.message, isCurrentUser: false },
      ]);
    });

    return () => socket.off("receive_message"); // Stop receiving messages on unmount
  }, [socket]);

  return (
    <Box height="100vh" bgcolor={color.white}>
      {/* Chatroom container */}
      <Box
        sx={{
          width: { xs: "100%", sm: "85%", md: "70%" },
          height: "100vh",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          bgcolor: color.black,
          borderRadius: "5px",
        }}
      >
        {/* Chat box header */}
        <Stack
          direction="column"
          height="80px"
          bgcolor={color.yellow}
          borderRadius={"0 0 25px 25px"}
          padding={1}
        >
          {/* Title and leave chat button */}
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4" textAlign="center" color={color.black}>
              ChatterBox
            </Typography>

            <LeaveChatButton />
          </Stack>

          {/* User info */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Avatar sizes="small">JD</Avatar>
            <Typography
              variant="h5"
              textAlign="center"
              color={color.black}
              mt={0.5}
            >
              John Doe
            </Typography>
          </Stack>
        </Stack>

        {/* Chat Conversation wrapper */}
        <Stack flexGrow={1} sx={{ overflowY: "auto", padding: 3 }}>
          <Typography
            variant="subtitle"
            color={color.white}
            textAlign="center"
            marginY={1}
          >
            You have joined the chat!
          </Typography>

          {messages.map((msg, index) => (
            <MessageBubble key={index} isCurrentUser={msg.isCurrentUser}>
              {msg.content}
            </MessageBubble>
          ))}
        </Stack>

        {/* Form */}
        <form onSubmit={sendMessage}>
          <Stack
            direction="row"
            alignItems="center"
            height="60px"
            spacing={1}
            padding={3}
          >
            <TextField
              fullWidth
              placeholder="Enter message..."
              onChange={(event) => setMessage(event.target.value)}
              sx={{ bgcolor: color.white, borderRadius: "10px" }}
            />
            <SendButton />
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
