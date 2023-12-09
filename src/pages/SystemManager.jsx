import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";

function SystemManager() {
  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h3>System Manager</h3>
          </Box>
      </Box>
    </> 
  )
}

export default SystemManager