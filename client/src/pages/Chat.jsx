/* File: Chat.jsx
 * Author: Joseph Koh
 * Description: Represents the Chat page
 */

import { MessageMaster } from "../components/containers/MessageMaster";
import { Box } from "@mui/material";
import { color } from "../data/constants";

export const Chat = () => {
  return (
    <Box height="100vh" bgcolor={color.lightyellow}>
      <MessageMaster />
    </Box>
  );
};

export default Chat;
