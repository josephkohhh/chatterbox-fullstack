/*
 * File: App.jsx
 * Author: Joseph Koh
 * Description: Entry point for ChatterBox app
 */

import "./App.css";
import fontTheme from "./theme/fontTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={fontTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
