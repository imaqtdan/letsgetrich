import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideNav from "../SideNav"

function SystemManager() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>System Manager</h1>
          </Box>
      </Box>
    </> 
  )
}

export default SystemManager