/* File: MessageMaster.jsx
 * Author: Joseph Koh
 * Description: Manages the conversation between users
 */

import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { color } from "../data/constants";
import { MessageBubble } from "../components/ui/MessageBubble";
import { LeaveChatButton } from "../components/ui/LeaveChatButton";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Chat = ({ socket }) => {
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
    <Box height="100vh" bgcolor={color.lightyellow}>
      {/* Brand title */}
      <Typography variant="h3" textAlign="center" py={2}>
        ChatterBox
      </Typography>
      {/* Conversation container */}
      <Box
        sx={{
          width: { xs: "92%", sm: "85%", md: "70%" },
          height: "85%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          bgcolor: color.black,
          borderRadius: "5px",
        }}
      >
        {/* Chat header */}
        <Stack
          direction="column"
          height="70px"
          bgcolor={color.grey}
          padding={1}
        >
          {/* Exit chat button */}
          <Stack direction="row" justifyContent="flex-end">
            <LeaveChatButton />
          </Stack>

          {/* User name */}
          <Typography
            variant="h5"
            textAlign="center"
            color={color.white}
            mt={0.5}
          >
            John Doe
          </Typography>
        </Stack>

        {/* Conversation */}
        <Stack flexGrow={1} sx={{ overflowY: "auto", padding: 1 }}>
          <Typography variant="subtitle" color={color.green} mx={1}>
            You are connected! Chat away!
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
            bgcolor={color.grey}
            spacing={1}
            padding={1}
          >
            <TextField
              fullWidth
              placeholder="Enter message..."
              onChange={(event) => setMessage(event.target.value)}
              sx={{ bgcolor: color.white, borderRadius: "10px" }}
            />
            <Button
              variant="contained"
              color="primary"
              disableRipple
              size="small"
              sx={{
                height: "50px",
              }}
            >
              Send
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
