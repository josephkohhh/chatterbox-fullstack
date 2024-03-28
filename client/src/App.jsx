/*
 * File: App.jsx
 * Author: Joseph Koh
 * Description: Entry point for ChatterBox app
 */

import "./App.css";
import fontTheme from "./theme/fontTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/Home";
import { Chatroom } from "./pages/Chatroom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [socket, setSocket] = useState(null);

  return (
    <>
      <ThemeProvider theme={fontTheme}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home socket={socket} setSocket={setSocket} />}
            />
            <Route
              path="/chatroom/:roomId"
              element={<Chatroom socket={socket} />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
