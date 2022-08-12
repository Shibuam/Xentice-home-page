import React from 'react'
import './HomePageStyle.css'
import {Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from '@material-ui/core'
const Banner = () => {
  const [room, setRoom] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setRoom(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className='images'>
      <Grid container>
 <Card item  className='card'>
<Typography  className='title'>Choose from 25,00+ Spaces for your Business</Typography>
<Typography variant='h6'>Get inspired and find your perfect place</Typography>
<FormControl fullWidth variant='outlined'className='select'>
<InputLabel id="demo-simple-select-label">Looking for</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={room}

    onChange={handleChange}
  >
    <MenuItem value={"Looking for"}>Looking for</MenuItem>
    <MenuItem value={"Meeting Room"}>Meeting Room</MenuItem>
   
  </Select>
</FormControl>

<FormControl fullWidth variant='outlined' className='select'>
<InputLabel id="demo-simple-select-label">Select City</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={city}

    onChange={handleChange}
  >
    <MenuItem value={"Select city"}>Select City</MenuItem>
    <MenuItem value={"Delhi"}>Noida</MenuItem>
   
  </Select>
</FormControl>
 <Grid item >
<Button sx={{backgroundColor:"#012B72"}}
    fullWidth className='btn' >Search</Button>
 
</Grid>
</Card>

</Grid>    </div>
  )
}

export default Banner
