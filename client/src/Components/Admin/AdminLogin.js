import React, { useState } from 'react'

import {
    Alert,
    Box,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
import { useDispatch } from 'react-redux';
import { adminSignIn } from '../../Redux/Admin/AdminSlice';

const AdminLogin = () => {
    
    const fieldStyle = {
    margin: "5px auto",
  };

    const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const admin = {
        username,
        password
    }



    const handleSignIn = (e) => {
        e.preventDefault()
        dispatch(adminSignIn(admin))
    }

  return (
    <div style={{width: '50rem', margin: '0 auto', marginTop: '100px', display: 'flex'}}>
        <form>
              <Typography>Sign In</Typography>
              <TextField
                required
                autoFocus
                variant="standard"
                value={username}
                label="email"
                style={fieldStyle}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                required
                variant="standard"
                value={password}
                type={"password"}
                label="password"
                style={fieldStyle}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form-footer">
                <Button
                  className="btn"
                  type="submit"
                  variant="contained"
                  onClick={handleSignIn}
                >
                  Login
                </Button>
              </div>
        </form>
    </div>
  )
}

export default AdminLogin