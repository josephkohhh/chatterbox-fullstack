/*
 * File: App.jsx
 * Author: Joseph Koh
 * Description: Entry point for ChatterBox app
 */

import "./App.css";
import fontTheme from "./theme/fontTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Loading } from "./components/ui/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={fontTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>

        {/* <Chat /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
