import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import beach from '../Images/8mile-beach.JPG'
import me from '../Images/koz-top.JPG'
import lighthouse from '../Images/lighthouse.JPG'

const About = () => {
  return (
    <div style={{marginTop: '10vh'}}>

        <img src={beach} style={{width: '100vw', height: '100vh'}}></img>    
        <div style={{justifyContent: 'center', alignItems: 'center'}}>   
        <Typography>Are you a laid back guy or gal?</Typography>
        <Typography>Is all you want to do is relax on the beach? </Typography>
        </div> 
        <Box style={{maringTop: '20vh'}}>
            <Grid container style={{justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={5}>
                    <img src={me} style={{width: '100%', height: '100%'}}></img>
                </Grid>
                <Grid item xs={5}>
                    Hello I am Justin Mithell founder of Beach Bum. I am an outdoor enthuesist always seeking that next adventure. I have had my fair share of sunsets, sunrises and just overall good times with good people.  
                </Grid>
                <Grid item xs={5}>
                    I was stuck with a problem trying to find nice cloths that encapsulated my adventurous and relaxed personality. Either the cloths were just too cheap and are not breathable or they were extermely expensive for what you are getting. 
                    
                </Grid>
                <Grid item xs={5}>
                    <img src={lighthouse} style={{width: '100%', height: '100%'}}></img>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default About