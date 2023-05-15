import React from 'react';
import './home.css';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

function Home() {
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      className="container"
    >
      <Box className="card">
        <form className="form">
          <Typography variant="h3" align="center" textTransform={'uppercase'} className="form-title" color='#fff'>
            Login
          </Typography>
          <Box className="form-input">
            <TextField variant="standard" label="Usuario" fullWidth />
          </Box>
          <Box className="form-input">
            <TextField variant="standard" label="Senha" type='password' fullWidth />
          </Box>
          <Button variant='contained' fullWidth className='button'>Logar</Button>
        </form>
      </Box>
    </Grid>
  );
}

export default Home;
