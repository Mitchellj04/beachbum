import React from 'react'
import '../Home.css'
import beach from '../Images/beach-background.jpeg'
import surf from '../Images/pxfuel.jpg'
import { Typography } from '@mui/material'

const Home = () => {
  return (
    <div className='home'>
        <img src={surf} className='main-image' />

        <div>
            <Typography></Typography>
        </div>
    </div>
  )
}

export default Home