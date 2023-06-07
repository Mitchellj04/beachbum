import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../Redux/User/UserSlice";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./Sign.css";

const Sign = () => {
  //Styling
  const fieldStyle = {
    margin: "5px auto",
  };
  const paperStyle = {
    align: "left",
    padding: "30px 20px",
    width: 400,
    margin: "100px auto",
  };

  //Redux Reducer
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //User State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorMessage = useSelector((state) => state.user.errors);
  const order = useSelector((state) => state.cart);

  //User info
  const customer = {
    email,
    password,
  };

  //User login fetch
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(userSignIn(customer));
    navigate("/confirm");
  };

  return (
    <div className="sign-form">
      <Grid container>
        <Grid item>
          <Box>
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
              <div className="form-footer">
                <Button startIcon={<KeyboardBackspaceIcon />}>Return</Button>
                <Button
                  className="btn"
                  type="submit"
                  variant="contained"
                  onClick={handleSignIn}
                >
                  Continue To Shipping
                </Button>
              </div>
              {errorMessage.map((text) => {
                return <Alert severity="error">{text}</Alert>;
              })}
            </form>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h4">Order</Typography>
          <div className="order-info">
            {order.cartItems.map((item) => {
              return (
                <div style={{ display: "flex" }} key={item.id}>
                  <img style={{ width: 100 }} src={item.image}></img>
                  <Typography style={{ margin: 10 }}>{item.title}</Typography>
                  <Typography style={{ margin: 10 }}>$ {item.price}</Typography>
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
                </tr>
              </tfoot>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sign;
