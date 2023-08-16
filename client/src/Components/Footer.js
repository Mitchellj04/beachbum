import { Button, TextField, Link } from '@mui/material'
import React from 'react'
import '../Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const charity = "https://oceanconservancy.org/"

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
                  <li className='footer-item'><Link to="about" spy={true} smooth={true} onClick={()=> navigate('/about')}>About</Link></li>
                  <li className='footer-item'><Link href={charity} target='_blank' rel='noopener noreferrer'>Charity</Link></li>
                  <li className='footer-item'><Link href={"https://medium.com/@mitchelljm04"} target='_blank' rel='noopener noreferrer'>Blog</Link></li>
                </ul>
              </div>
              <div>
                <h6>Beachbum</h6>
                <ul>
                  <li className='footer-item'><Link to="products"  onClick={()=> navigate('/products')}>Products</Link></li>
                  <li className='footer-item'><Link to="conact"  onClick={()=> navigate('/contact')}>Contact</Link></li>
                  <li className='footer-item'><Link to="conact"  onClick={()=> navigate('/admin')}>Admin</Link></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer