import * as React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import {
  Card,
  styled,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import { Button } from "@mui/material";

let shop = [
  {
    name: "Bone Avanue",
    url: "Building/AhDLl8uYSfIXfCGsR4GTrLmqDfrj56NhchTWF5K3.jpg",
    location: "Chennai",
    rent: "5000/sqr.ft",
  },
  {
    name: "Avanue",
    url: "Building/NAoIPXRGRy4RTarkQ7CB4gSQHhZcrbMicYSSiUvR.jpg",
    location: "Bangalore",
    rent: "600/Sqr.ft",
  },
  {
    name: "Office",
    url: "Building/PljvM17rcGpWjFnP8ufvc41PW0ficg3Sw6t1OyuV.jpg",
    location: "Kochin",
    rent: "12000/Month",
  },
  {
    name: "Evans Office",
    url: "Building/uWL2qzFqwvcvCTa9amTrvbJ6cBShfMuXUrSWbxoA.jpg",
    location: "Chennai",
    rent: "150000/",
  },
];

const CommercialBuilding = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}className='card-header'>
          <Typography>
            {" "}
            <img
              src="Building/building_lease.54959134.png"
              style={{ width: "30px" }}
            />{" "}
            Industrial Building
          </Typography>
          <Button>Explore More</Button>
        </Grid>
        {shop.map((element) => (
          <>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={{ margin: "10px" }}>
                <img src={element.url} className="card-image" />
                <Typography className="card-style">
                  {element.name} <FavoriteBorderIcon />
                </Typography>
                <Typography className="card-style-location">
                 <PlaceOutlinedIcon/> {element.location}
                </Typography>
                <Typography className="card-style-price">
                  RS:{element.rent}
                </Typography>
                <Typography className="card-style-explore">
                  Explore Now
                </Typography>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default CommercialBuilding;
