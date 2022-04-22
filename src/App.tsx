import { Drawer, Toolbar, Box, Tabs, Tab } from "@mui/material";
import Header from "./components/Header";
import { SyntheticEvent, useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { app } from "./helpers/feathers";


const drawerWidth = 240;


function App() {
  // const [users, setUsers] = useState([])
  // useEffect(() => {

  // }, [])
  return (
    <Box sx={{ display: 'flex' }}>
      <Header width={drawerWidth} />
      <SideBar width={drawerWidth} />
      <Box sx={{
        flexGrow: 1
      }}>

      </Box>
    </Box>
  );
}

export default App;
