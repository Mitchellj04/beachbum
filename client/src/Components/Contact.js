import { Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React from "react";
import "../Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-title">
          <div>
            <Typography variant="h4">Contact Us</Typography>
            <Typography>
              Please reach out to us with any questions or concerns
            </Typography>
          </div>
        </div>
        <Grid container>
          <Grid item xs={5}>
            <div className="contact-phone">
              <div>
                <Typography variant="h5">
                  <LocalPhoneIcon /> Call Us
                </Typography>
                <Typography>203-909-0635</Typography>
                <Typography>
                  Give us a call and talk to a real human! If we're busy, leave
                  a voicemail and we will get back to you within 24 hours.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="contact-email">
              <div>
                <Typography variant="h5">
                  <EmailIcon /> Email Us
                </Typography>
                <Typography>contact@beachbum.com</Typography>
                <Typography>
                  The fastest way to get in touch with us. Send us an email with
                  your question or concern and we will get back to you within
                  12-24 hours.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
