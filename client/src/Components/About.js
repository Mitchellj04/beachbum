import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import beach from '../Images/8mile-beach.JPG'
import me from '../Images/koz-top.JPG'
import lighthouse from '../Images/lighthouse.JPG'

const About = () => {
  return (
    <div style={{marginTop: '10vh'}} id='about' className='about'>

        <img src={beach} style={{width: '100vw', height: '100vh'}}></img>    
        <div className='about-title'>   
        <Typography variant='h4'>Are you a laid back guy or gal? <br></br>Is all you want to do is relax on the beach? </Typography>
        </div> 
        <div className='about-section'>
        <Box style={{maringTop: '20vh'}}>
            <Grid container className='grid-container' style={{justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={5}>
                    <img src={me} style={{width: '100%', height: '100%'}}></img>
                </Grid>
                <Grid item xs={5} style={{position: 'relative', display: 'flex', flex: '1 0 auto', width: '50rem'}}>
                    <div className='grid-text'>
                        <Typography>Hello I am Justin Mithell founder of Beach Bum. I am an outdoor enthuesist always seeking that next adventure. I have had my fair share of sunsets, sunrises and just overall good times with good people.  </Typography>
                    </div>
                    
                </Grid>
                <Grid item xs={5}>
                <div className='grid-text'>
                    <Typography>I was stuck with a problem trying to find nice cloths that encapsulated my adventurous and relaxed personality. Either the cloths were just too cheap and are not breathable or they were extermely expensive for what you are getting. </Typography>
                </div>
                </Grid>
                <Grid item xs={5}>
                    <img src={lighthouse} style={{width: '100%', height: '100%'}}></img>
                </Grid>
            </Grid>
        </Box>
        </div>

    </div>
  )
}

export default About