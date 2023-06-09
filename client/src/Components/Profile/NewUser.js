import { Alert, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Redux/User/UserSlice";
import { useNavigate } from "react-router-dom";
import "./NewUser.css";

const NewUser = () => {
  //Styling
  const fieldStyle = {
    margin: "5px auto",
  };
  const paperStyle = {
    padding: "30px 20px",
    width: 400,
    margin: "100px auto",
  };

  //Redux Reducer
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const order = useSelector((state) => state.cart);
  const loggedIn = useSelector((state) => state.user.userLoggedIn);
  const errorMessage = useSelector((state) => state.user.errors);

  console.log(order)

  //New User State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  //New User info
  const newUser = {
    name,
    email,
    phone,
    address,
    password,
  };

  //Handle new user fetch
  const handleCreateUser = (e) => {
    e.preventDefault();
    dispatch(createUser(newUser));
    // navigate("/confirm");
  };

  console.log(user);
  console.log(loggedIn);

  return (
    <div className="newuser-form">
      <Grid container>
        <Grid item xs={5}>
          <Box>
            <form>
              <div className="contact-info">
                <Typography variant='h5'>Contact Information</Typography>
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
              </div>
              <div className="shipping-info">
                <Typography variant='h5'>Shipping Information</Typography>
                <TextField
                  required
                  autoFocus
                  variant="standard"
                  halfwidth
                  value={name}
                  label="Name"
                  style={fieldStyle}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  required
                  autoFocus
                  variant="standard"
                  halfwidth
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
              </div>
 
            </form>            
            {errorMessage.slice(0,1).map((text) => {
                return <Alert severity="error">{text}</Alert>;
              })}            
            <div className="form-footer">
            
             
              <Button startIcon={<KeyboardBackspaceIcon />}>Return</Button> 
              <Button
                className="btn"
                type="submit"
                variant="contained"
                onClick={handleCreateUser}>
                Continue To Shipping
              </Button>
              </div>
   
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h4">Order</Typography>
          <div className="order-info">
            {order.cartItems.map((item) => {
              return (
                <div style={{ display: "flex" }}>
                  <img style={{ width: 100 }} src={item.image}></img>
                  <Typography style={{margin: 10}}>{item.title}</Typography>
                  <Typography style={{margin: 10}}>$ {item.price}</Typography>
                </div>
              );
            })}
          
              <table className="newuser-table">
                <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>${order.cartTotalAmount}</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>TBD</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <th>Total</th>
                  <td>${order.cartTotalAmount}</td>
                </tr></tfoot>
              </table>
     
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewUser;
