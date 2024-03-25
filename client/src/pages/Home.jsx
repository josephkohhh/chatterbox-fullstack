/* File: Home.jsx
 * Author: Joseph Koh
 * Description: Represents the Home page
 */

import { Box } from "@mui/material";
import { color } from "../data/constants";
import { Navbar } from "../components/layout/Navbar";
import { HomeContent } from "../components/layout/HomeContent";
import { Footer } from "../components/layout/Footer";
import { useState } from "react";
import { Loading } from "../components/ui/Loading";

export const Home = () => {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <>
      <Loading />
    </>
  ) : (
    <Box bgcolor={color.yellow}>
      <Navbar />
      <HomeContent loading={loading} setLoading={setLoading} />
      <Footer />
    </Box>
  );
};
