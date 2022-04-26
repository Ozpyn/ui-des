import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

const App = () => {
  return (
  <Box>
    {/* if ( (page !== Notif) &&& (page !== Settings) ){ */}
      <Button sx={{position: 'fixed', top:0, left:0,}}variant="outlined">Settings</Button>
      <Button sx={{position: 'fixed', top:0, right:0,}}variant="outlined">Notifications</Button>
    {/* } */}
    {/* else{
      <<Button sx={{position: 'fixed', top:0, left:0,}}variant="outlined">Back</Button>
    } */}
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" />
          <BottomNavigationAction label="Stats" />
          <BottomNavigationAction label="Friends" />
        </BottomNavigation>
      </Paper>
  </Box>
);
}

export default App;