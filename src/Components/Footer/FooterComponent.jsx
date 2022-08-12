import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./FooterStyle.css";
const FooterComponent = () => {
  return (
    <div className="footer">
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography>About</Typography>

          <p className="text">
            {" "}
            How Xentice works
            <br />
            Founders Letter
            <br />
            Newsroom
            <br />
            Investors
            <br />
            Xentice Gold
            <br />
            Xentice Platinum
            <br />
            Startup Support
            <br />
            Careers{" "}
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {" "}
          <Typography>Explore</Typography>
          <p className="text">
            Diversity & Discrimination
            <br />
            Accessibility
            <br />
            Xentice Associates
            <br />
            Xentice Team
            <br />
            Xentice Mall
            <br />
            Xstudio
            <br />
            Xmoney
            <br />
            Entice Spaces
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        
          <Typography>Services</Typography>
          <p className="text">
          Buttons & Badges<br/>

Mobile Appss<br/>

For Companiess<br/>

Mobile Appss<br/>

Review Professionalss<br/>

Suggested Professionalss<br/>

Resource Centres<br/>

Community Centres<br/>
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        
          <Typography>Support</Typography>
          <p className="text">
          Our COVID-19 Response<br/>

Help Centre<br/>

Cancellation options<br/>

Neighbourhood Support<br/>

Corporate contact<br/>

Trust & Safety<br/>

FAQ<br/>

Payment gateway
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
   <Typography>    DISCLAIMER</Typography> 

<p>Please do not share your xentice password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from xentice. We advise our customers to completely ignore such communications & report to us at support@xentice.com.</p>
        </Grid>
        <Grid item xs={12} sm={6} className='footer-image'>
            
<img src='footer/badge-download-on-the-app-store.e8046ecc.png' className="imgStyle" />
<img src='footer/google-play-badge.609afac0.png' className="imgStyle"/>

</Grid>
<Grid item xs={12}>

<hr/>
</Grid>
<Grid item xs={12} sm={6}>
<p>© Xentice Group of Companies 2022 . All Rights Reserved</p>
</Grid>
<Grid item xs={12} sm={6} className='buttonStyle'>
<Button className='btn'>About Us</Button>
<Button className='btn'>Contact Us</Button>
<Button className='btn'>Privacy Policy</Button>
</Grid>
      </Grid>
    </div>
  );
};

export default FooterComponent;
