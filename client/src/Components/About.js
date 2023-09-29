import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import beach from "../Images/8mile-beach.JPG";
import me from "../Images/koz-top.JPG";
import lighthouse from "../Images/lighthouse.JPG";
import "../About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <img src={beach} style={{ width: "100vw", height: "100vh" }}></img>
      <div className="about-title">
        <Typography variant="h4">
          What is a beach bum? <br></br>Do you wish all you could do is wash
          your worries away <br></br> Laying on the beach not a trouble in the
          world.{" "}
        </Typography>
      </div>
      <div className="about-section">
        <Grid
          container
          className="grid-container"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item xs={5} style={{ paddingBottom: 10 }}>
            <img src={me} style={{ width: "100%", height: "100%" }}></img>
          </Grid>
          <Grid
            item
            xs={5}
            className="grid-item"
            style={{
              padding: 25,
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <div className="grid-text">
              <Typography
                variant="h5"
                style={{ padding: 10, textDecoration: "bold" }}
              >
                Hello I am Justin Mithell founder of Beach Bum.
              </Typography>
              <Typography>
                {" "}
                I am an outdoor enthuesist always seeking that next adventure.{" "}
                <br></br> I have had my fair share of sunsets, sunrises and just
                overall good times with good people.{" "}
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={5}
            style={{
              padding: 25,
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <div className="grid-text">
              <Typography style={{ padding: 10 }}>
                I was stuck with a problem trying to find nice cloths that
                encapsulated my adventurous and relaxed personality.{" "}
              </Typography>
              <Typography style={{ padding: 10 }}>
                Either the cloths were just too cheap and are not breathable or
                they were extermely expensive for what you are getting.{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={5} style={{ paddingBottom: 10 }}>
            <img
              src={lighthouse}
              style={{ width: "100%", height: "100%" }}
            ></img>
          </Grid>
          <Grid item xs={5} style={{ paddingBottom: 10 }}>
            <img src={me} style={{ width: "100%", height: "100%" }}></img>
          </Grid>
          <Grid
            item
            xs={5}
            style={{
              padding: 25,
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <div className="grid-text">
              <Typography style={{ padding: 10 }}>
                My main mission for Beachbum was to create a community of laid
                back people who enjoy living life the way you are suppose to.{" "}
              </Typography>
              <Typography style={{ padding: 10 }}>
                The second goal of beachbum was to use the businesses to benefit
                a bigger cause. No matter the city, county, or beach there was
                always some type of trash distracting the beauty of the site.
              </Typography>
              <Typography style={{ padding: 10 }}>
                That is why Beachbum has commited to making an effort to clean
                up parks and beaches around the world.{" "}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
