import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css'

const App=()=> {
  const [p,setP]= useState(0)
  const [t,setT]= useState(0)
  const [r,setR]= useState(0)
  const [si,setSi]= useState(0)

  const calculateInterest=()=>{
    setSi(p*t*r/100)
  }
  return (
    <div >
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Intrest Calculator
          </Typography>
          
        </Toolbar>
      </AppBar>
      <br></br>
      <TextField onChange={(event)=> setP(event.target.value)} id="standard-basic" label="Principal" variant="standard" /><br></br>
      <TextField onChange={(event)=> setT(event.target.value)} id="standard-basic" label="Time" variant="standard" /><br></br>
      <TextField onChange={(event)=> setR(event.target.value)} id="standard-basic" label="Rate" variant="standard" /><br></br>
      <br></br>
      <Button onClick={()=> calculateInterest()} variant="contained">Calculate</Button>
      <br></br>
      <br></br> <Typography variant="h5" gutterBottom>
        Simple Intrest Is: {si}
      </Typography>
    </Box>
    </div>
  );
}

export default App;
