import React from 'react'
import './navbar.css'
import { AppBar, Toolbar, Grid, Box, Typography } from '@mui/material'

function Navbar() {
  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container justifyContent={'space-between'}>
          <Box style={{ cursor: 'pointer' }}>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar