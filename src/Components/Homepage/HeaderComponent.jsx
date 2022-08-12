import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,IconButton,FormControlLabel,FormGroup,MenuItem,Switch,Button, Grid} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
export  function HeaderComponent() {
    return (
        <Box >
          <AppBar className='appBar'>
         
            <Grid container>
              <Grid item xs={12} className='header' >
              <Typography variant="h3" className='appBar-text'>
                Exentice
              </Typography>
             
              <Typography>
              <Button className='btns'><VolumeUpOutlinedIcon/>Post Add</Button>
              <Button className='btns'><PlaceOutlinedIcon/>Near Me</Button>
           <Button className='btns'>   <LoginOutlinedIcon/>Login/SignUp</Button>
              </Typography>
              </Grid>
            </Grid>
            
         
          </AppBar>
        </Box>
      );
    }