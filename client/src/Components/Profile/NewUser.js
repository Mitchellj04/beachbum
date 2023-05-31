import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/User/UserSlice";

const NewUser = () => {  
    
    const fieldStyle = {
    margin: "5px auto",
  };
  const paperStyle = {
    padding: "30px 20px",
    width: 400,
    margin: "100px auto",
  };

    const dispatch = useDispatch()

    //
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')


    const newUser = {
        name, 
        email, 
        phone, 
        address,
        password
    }


  const handleCreateUser = (e) => {
    e.preventDefault()
    dispatch(createUser(newUser))
  }

  return (
    <div>
      <Box>
        <Paper elevation={20} style={paperStyle}>
          <form>
            <Typography>Create Account</Typography>
            <TextField
              required
              autoFocus
              variant="standard"
              fullWidth
              value={name}
              label="Name"
              style={fieldStyle}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              autoFocus
              variant="standard"
              fullWidth
              value={email}
              label="email"
              style={fieldStyle}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              autoFocus
              variant="standard"
              fullWidth
              value={phone}
              label="phone"
              style={fieldStyle}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              required
              autoFocus
              variant="standard"
              fullWidth
              value={address}
              label="Address"
              style={fieldStyle}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              required
              fullWidth
              variant="standard"
              type={"password"}
              value={password}
              label="password"
              style={fieldStyle}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" onClick={handleCreateUser}>
              Continue
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default NewUser;
