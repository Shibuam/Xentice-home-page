import * as React from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import {Card,ton,Typography, Grid} from '@material-ui/core';
import { Button } from '@mui/material';

let shop=[
    {
        name:'Shop',
        url:'Shop/7tDOwtNMBHJrhvYCLj5zHztMIbwL6Gq0snqz57Ch.jpg',
        location:'Cochin',
        rent:'11500/Month'
    },
    {
      name:'Property',
      url:'Shop/c4jpZMy9hRZFEgqECuD1soVdrskS21z9FJMM5tIn.jpg',
      location:'Chennai',
      rent:'12000/Month'
  },
  {
    name:'Outlet',
    url:'Shop/GnDFpvqTPcCSaMLFdlam8RjBNaKLvupWrCgz9Xx3.jpg',
    location:'Hydarabad',
    rent:'16000/Month'
}, {
  name:'Comrecial Store',
  url:'Shop/tqovl04rCW2CHGd5HPPfgjVPCXbRqHxWC5qOae80.jpg',
  location:'Bangalore',
  rent:'9000/Month'
},
]



const CommercialShop = () => {
  return (
    <div>
        <Grid container>
          <Grid item xs={12} className='card-header'>
          <Typography>   <img src='Shop/commercial_space.cabcda3f.png' style={{width:'30px'}}/> Commercial Shop</Typography>
          <Button>Explore More</Button>
          </Grid>
        {shop.map((element)=>
        <>
         <Grid item xs={12} sm={6} md={3} >
          <Card style={{margin:'10px'}}>

<img src={element.url}  className='card-image'/>
<Typography className='card-style'>{element.name} <FavoriteBorderIcon/></Typography>
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

export default CommercialShop
