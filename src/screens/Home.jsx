import React from "react";
import {Box,Stack} from '@mui/material'
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Feed } from "../components/Feed";
import { Rightbar } from "../components/Rightbar";


export const Home = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};
