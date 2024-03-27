/*
 * File: index.mjs
 * Author: Joseph Koh
 * Description: Entry point for express app
 */

import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import createChatRoom from "./utils/createChatRoom.mjs";

const app = express(); // Create an express app

const port = process.env.PORT || 3000;

const httpServer = http.createServer(app); // Create a http server

// Create a socketIO server mounted on http server
const wsServer = new SocketIOServer(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

const waitingUsers = new Set(); // Set of user socket objects waiting for a match

// Connection listener
wsServer.on("connection", (socket) => {
  const userId = socket.id; // Assigns a unique ID to each connection
  // If there are waiting users, pair them up
  if (waitingUsers.size > 0) {
    const partnerSocket = [...waitingUsers][0]; // Pair up user & partner
    waitingUsers.delete(partnerSocket);

    const roomId = createChatRoom(userId, partnerSocket.id); // Create room

    socket.emit("chat-room", { type: "chat-room", roomId });

    wsServer
      .to(partnerSocket.id)
      .emit("chat-room", { type: "chat-room", roomId });
  }
  // Otherwise, add the user to the waiting queue
  else {
    waitingUsers.add(socket);
  }

  // Message listener
  socket.on("send_message", (data) => {
    socket.to(data.roomId).emit("receive_message", data);
  });

  // Disconnect listener
  socket.on("disconnect", () => {
    // Remove user from waiting queue if they were waiting
    if (waitingUsers.has(socket)) {
      waitingUsers.delete(socket);
    }
    // Handle closing of chat rooms if necessary
  });
});

// Start up the http server
httpServer.listen(port, () =>
  console.log(`Server started up listening on port ${port}`)
);
