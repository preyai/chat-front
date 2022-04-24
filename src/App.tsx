import { Drawer, Toolbar, Box, Tabs, Tab } from "@mui/material";
import Header from "./components/Header";
import { SyntheticEvent, useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { app } from "./helpers/feathers";
import Chat from "./components/Chat";
import { useStoreContext } from "./hooks/useStore";
import { Outlet } from "react-router-dom";


const drawerWidth = 240;


function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>

      <SideBar width={drawerWidth} />
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header width={drawerWidth} />
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
