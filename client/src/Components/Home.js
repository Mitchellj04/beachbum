import React, { useEffect } from "react";
import "../Home.css";
import beach from "../Images/beach-background.jpeg";
import surf from "../Images/pxfuel.jpg";
import { Typography } from "@mui/material";
import Featured from "./Featured";
import { useDispatch } from "react-redux";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-image">
        <img src={surf} className="main-image" />
      </div>
      <div className="title">
        <Typography variant="h2">Be A Beach Bum</Typography>
      </div>
      <div className="featured">
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
