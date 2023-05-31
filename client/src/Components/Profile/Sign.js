import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from 'react'

const Sign = () => {
    const fieldStyle = {
        margin: "5px auto",
      };
      const paperStyle = {
        align: 'left',
        padding: "30px 20px",
        width: 400,
        margin: "100px auto",

      };


  return (
    <div>
<Box>
        <Paper elevation={5} style={paperStyle}>
          <form>
            <Typography>Create Account</Typography>
            <TextField
              required
              autoFocus
              variant="standard"
              fullWidth
              label="email"
              style={fieldStyle}
            />
            <TextField
              required
              fullWidth
              variant="standard"
              type={"password"}
              label="password"
              style={fieldStyle}
            />
            <Button type="submit" variant="contained">
              Checkout
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  )
}

export default Sign