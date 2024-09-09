import React from "react";
import SideNav from "../components/SideNav/SideNav";
import { Box } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>About</h1>
      </Box>
    </Box>
  );
};

export default About;
