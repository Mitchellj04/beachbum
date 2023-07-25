import { Button, TextField } from '@mui/material'
import React from 'react'
import '../Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='footer-container'>
          <div className='footer-form'>
            <h3>Get latest Releases!</h3>
            <p>Sign up for our exclusive email list!</p>
            <form className='form'>
            <TextField type='text' placeholder='Email' name='email' className='text-field'></TextField>
            <Button>Sign Up</Button>
            </form>
          </div>
          <div className='footer-menu-container'>
              <div className='first-box'>
                <h6>Our Story</h6>
                <ul>
                  <li>About</li>
                  <li>Charity</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h5>Beachbum</h5>
                <ul>
                  <li>Products</li>
                  <li>Contact</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer