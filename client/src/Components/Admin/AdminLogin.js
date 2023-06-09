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

const AdminLogin = () => {
    
    const fieldStyle = {
    margin: "5px auto",
  };

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const admin = {
        username,
        password
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        // fetch('/admin', {
        //     method: "POST",
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(admin)
        // })
        // .then((resp) => resp.json)
        // .then((auth) => console.log(auth))
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