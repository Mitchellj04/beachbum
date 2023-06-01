import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from 'react'

const Sign = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const fieldStyle = {
        margin: "5px auto",
      };
      const paperStyle = {
        align: 'left',
        padding: "30px 20px",
        width: 400,
        margin: "100px auto",

      };

      const customer = {
        email, 
        password
      }
      const handleSignIn = () => {
        
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
          </form>
        </Paper>
      </Box>
    </div>
  )
}

export default Sign