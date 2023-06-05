import { FormGroup, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import NewUser from './NewUser'
import Sign from './Sign'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const navigate = useNavigate();
    const userLoggedIn = useSelector((state) => state.user.userLoggedIn)
    const [loggedIn, setLoggedIn] = useState(true)
    console.log(userLoggedIn)

    if (userLoggedIn === true) {navigate('/confirm')}
  return (
    <div style={{marginTop: 100}}>
       {loggedIn ? (
        <div>
            <p>Already have an Account?</p>
            <Button variant="secondary" sx={{ color: 'secondary.light' }} onClick={() => setLoggedIn(false)}>Sign In</Button>
            <NewUser />
            <div>
            
            
            </div>
        </div>
       ) : (
       <div>
            <Sign />
            <div>
            <p>Dont have an account?</p>
            <Button variant="secondary" sx={{ color: 'secondary.light' }} onClick={() => setLoggedIn(true)}>Create Account</Button>
            </div>
       </div>) }
</div>
  )
}

export default Checkout