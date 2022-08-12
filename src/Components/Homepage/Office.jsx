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
    url: "Office/j5FUmX59wcK2T1Pbc0R6ulT9R4fFU2j9MW4KYziY.jpg",
    location: "Chennai",
    rent: "5000/sqr.ft",
  },
  {
    name: "Avanue",
    url: "Office/KQlC1JeWuAo8eGJhv7I074m6knC0jaY0rSX08bRg.jpg",
    location: "Bangalore",
    rent: "600/Sqr.ft",
  },
  {
    name: "Office",
    url: "Office/SMLGiVKoP1nf9v3WMvL4Jy7t6w2PGERwrMlMX8S9.jpg",
    location: "Kochin",
    rent: "12000/Month",
  },
  {
    name: "Evans Office",
    url: "Office/Y8DLJWlhmO1AYWByN7u1aJp11OeiOkytA9Y1p3wG.jpg",
    location: "Chennai",
    rent: "150000/",
  },
];

const CommercialOffice = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}className='card-header'>
          <Typography>
            {" "}
            <img
              src="Office/commercial_office.b0884622.png"
              style={{ width: "30px" }}
            />{" "}
            Commercial Office
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

export default CommercialOffice;
