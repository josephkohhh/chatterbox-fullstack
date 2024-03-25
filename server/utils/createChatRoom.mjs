/*
 * File: createChatRoom.mjs
 * Author: Joseph Koh
 * Description: A function create chat room
 */

const chatRooms = new Map(); // Map of roomId to room object

// Function to create chat room
const createChatRoom = (userA, userB) => {
  const roomId = `${userA}-${userB}`;
  const newRoom = {
    roomId,
    participants: new Set([userA, userB]),
  };
  chatRooms.set(roomId, newRoom);
  return roomId;
};

export default createChatRoom;
