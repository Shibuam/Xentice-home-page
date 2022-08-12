import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import {Card,styled,CardHeader,CardMedia,CardContent,CardActions,Collapse,Avatar,IconButton,Typography, Grid} from '@material-ui/core';
import { Button } from '@mui/material';

let shop=[
    {
        name:'Green Land',
        url:'Land/04bGPRsEKLO0Jz1U7bdmHMtOKqndtTwjZJr5T2zh (1).jpg',
        location:'Chennai',
        rent:'5000/sqr.ft'
    },
    {
      name:'Plot',
      url:'Land/5CJoiusq2Zbi1QuCE7lU3AhGCp2NZNM99Joamx5x.jpg',
      location:'Bangalore',
      rent:'600/Sqr.ft'
  },
  {
    name:'Office',
    url:'Land/iELasWL1Bw54TQp0cIaPJRmjLesKXbIVdeX4dvYU.jpg',
    location:'Kochin',
    rent:'12000/Month'
}, {
  name:'Agri Store',
  url:'Land/XBpP1ToWLQe8YpANHp3rCVdkeJFnr5O2Ea3S14Nr.jpg',
  location:'Chennai',
  rent:'150000/'
},
]



const CommercialLand = () => {
  return (
    <div>
        <Grid container>
          <Grid item xs={12}className='card-header'>
          <Typography>   <img src='Land/commercial_land.def51047.png' style={{width:'30px'}}/> Commercial Land</Typography>
         <Button>Explore More</Button>
          </Grid>
        {shop.map((element)=>
        <>
         <Grid item xs={12} sm={6} md={3} >
          <Card style={{margin:'10px'}}>

<img src={element.url}  className='card-image'/>
<Typography className='card-style'>{element.name}<FavoriteBorderIcon/></Typography>
<Typography className='card-style-location'><PlaceOutlinedIcon/>{element.location}</Typography>
<Typography className='card-style-price'>RS:{element.rent}</Typography>
<Typography className='card-style-explore'>Explore Now</Typography>
</Card>
         </Grid>


                   </>
        )}
     </Grid>
    </div>
  )
}

export default CommercialLand
