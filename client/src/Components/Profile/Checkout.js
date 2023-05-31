import { FormGroup, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import NewUser from './NewUser'
import Sign from './Sign'

const Checkout = () => {

    const [loggedIn, setLoggedIn] = useState(true)

  return (
    <div style={{marginTop: 100}}>
       {loggedIn ? (
        <div>
            <NewUser />
            <div>
            <p>Already have an Account?</p>
            <Button variant="secondary" sx={{ color: 'secondary.light' }} onClick={() => setLoggedIn(false)}>Sign In</Button>
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