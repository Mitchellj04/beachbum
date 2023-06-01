import { Alert, Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../Redux/User/UserSlice";

const Sign = () => {    
  
  //Styling
  const fieldStyle = {
        margin: "5px auto",
      };
      const paperStyle = {
        align: 'left',
        padding: "30px 20px",
        width: 400,
        margin: "100px auto",

      };

    //Redux Reducer 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    //User State
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const errorMessage = useSelector((state) => state.user.errors)


    //User info
      const customer = {
        email, 
        password
      }

      //User login fetch 
      const handleSignIn = (e) => {
        e.preventDefault()
        dispatch(userSignIn(customer))
        navigate('/confirm')
      }


  return (
    <div>
<Box>
        <Paper elevation={5} style={paperStyle}>
          <form>
            <Typography>Sign In</Typography>
            <TextField
              required
              autoFocus
              variant="standard"
              value={email}
              fullWidth
              label="email"
              style={fieldStyle}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              fullWidth
              variant="standard"
              value={password}
              type={"password"}
              label="password"
              style={fieldStyle}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" onClick={handleSignIn}>
              Checkout
            </Button>
            {errorMessage.map((text) => {
                return <Alert severity="error">{text}</Alert>
            })}
          </form>
        </Paper>
      </Box>
    </div>
  )
}

export default Sign