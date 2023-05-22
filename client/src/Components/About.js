import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import beach from '../Images/8mile-beach.JPG'
import me from '../Images/koz-top.JPG'

const About = () => {
  return (
    <div style={{marginTop: '10vh'}}>

        <img src={beach} style={{width: '100vw', height: '100vh'}}></img>        
        <Typography>Are you a laid back guy or gal?</Typography>
        <Typography>Is all you want to do is relax on the beach? </Typography>
        <Box style={{maringTop: '20vh'}}>
            <Grid container style={{justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={5}>
                    <img src={me} style={{width: '100%', height: '100%'}}></img>
                </Grid>
                <Grid item xs={5}>
                    Do you just wish to just sit on the beach every day. Are you constantly chasing those amazing sunsets? 
                </Grid>
                <Grid
            </Grid>
        </Box>
    </div>
  )
}

export default About