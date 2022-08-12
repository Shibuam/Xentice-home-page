import * as React from "react";
import "./HomePageStyle.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Switch,
  Button,
} from "@material-ui/core";
let type = [
  {
    name: "Commercial Shop",
    url: "SecondHeader/commercial_space.cabcda3f.png",
  },
  {
    name: "Coworking-space",
    url: "SecondHeader/coworking.ae2d86ad.png",
  },
  {
    name: "Industrial Land",
    url: "SecondHeader/land_lease.7ccc6444.png",
  },
  {
    name: "Meeting Room",
    url: "SecondHeader/meeting-room.0b5c79ff.png",
  },
  {
    name: "Commercial Shop",
    url: "SecondHeader/commercial_space.cabcda3f.png",
  },
  {
    name: "Coworking-space",
    url: "SecondHeader/coworking.ae2d86ad.png",
  },
  {
    name: "Industrial Land",
    url: "SecondHeader/land_lease.7ccc6444.png",
  },
  {
    name: "Meeting Room",
    url: "SecondHeader/meeting-room.0b5c79ff.png",
  },
];

export function HeaderTwo() {
  return (
    <div className="secondHeader">
      {type.map((ele) => (
        <>
          <Box className="job-type-box">
            <img src={ele.url} className="jobs-type-image" />
            <Typography className="jobs-type-title">{ele.name}</Typography>
          </Box>
        </>
      ))}
    </div>
  );
}
