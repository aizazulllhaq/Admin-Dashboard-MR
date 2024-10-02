import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../../components/Navbar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  console.log("Data : ", data);

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={isNonMobile ? "flex" : "block"}
    >
      <Sidebar
        user={data && data.user || {}}
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth={"250px"}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data && data.user || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
