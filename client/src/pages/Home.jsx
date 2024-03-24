/* File: Home.jsx
 * Author: Joseph Koh
 * Description: Represents the Home page
 */

import { Box } from "@mui/material";
import { color } from "../data/constants";
import { Navbar } from "../components/layout/Navbar";
import { HomeContent } from "../components/layout/HomeContent";
import { Footer } from "../components/layout/Footer";

export const Home = () => {
  return (
    <Box bgcolor={color.yellow}>
      <Navbar />
      <HomeContent />
      <Footer />
    </Box>
  );
};
