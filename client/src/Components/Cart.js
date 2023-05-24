import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartTotals, decreaseCart, increaseCart, removeItem } from "../Redux/Cart/CartSlice";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import '../Cart.css'

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
 console.log(cart);

 useEffect(() => {
    dispatch(cartTotals())
 }, [cart, dispatch])

 

 
  const handleRemoveItem = (product) => {
    dispatch(removeItem(product));
  };

  const decreaeCartItem = (product) => {
    dispatch(decreaseCart(product))
  }

  const increaseCartItem = (product) => {
    dispatch(increaseCart(product))
  } 

  const items = cart.cartItems.map((product) => {
    return (
      <Grid container>
        <Grid item xs={4}>
          <div className="cart-product-div">
            <img
              component="img"
              src={product.image}
              style={{ height: 200 }}/>
            <Typography>Color: {product.color}</Typography>
            <Typography>Size: {product.size}</Typography>
            <Button onClick={() => handleRemoveItem(product)}>Remove</Button>
          </div>
        </Grid>
        <Grid xs={2}>
          <Typography>$ {product.price}</Typography>
        </Grid>
        <Grid xs={2}>
          <div style={{display: 'flex'}}>
            <Button onClick={() => decreaeCartItem(product)}>-</Button> 
            <p>{product.cartQuantity}</p>
            <Button onClick={() => increaseCartItem(product)}>+</Button>
          </div>
        </Grid>
        <Grid xs={2}>
          <Typography>$ {product.price * product.cartQuantity}</Typography>
        </Grid>
      </Grid>
    );
  });

  return (
    <div id="cart" className='cart'>
      <div>
        <Typography variant="h3">Shopping Cart</Typography>
      </div>
      <div>
        {cart.cartItems.length === 0 ? (
          <div className="emptyCart">
            <Typography>Your cart is currently empty</Typography>
            <Box>
              <Button onClick={() => navigate("/products")}>
                Continue Shopping
              </Button>
            </Box>
          </div>
        ) : (
          <div>
            <div className="titles">
              <Grid container>
                <Grid item xs={4}>
                  <Typography variant="h5">Product</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h5">Price</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h5">Quantity</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h5">Total</Typography>
                </Grid>
              </Grid>
            </div>
            <div className="cartItems">{items}</div>
          </div>
        )}
      </div>
      <div>
        <Grid container>
          <Grid item xs={4}>
            <Button variant='outlined'>Clear</Button>
          </Grid>
          <Grid item>
            <div style={{display: 'flex'}}>            
            <Typography variant="h4">Subtotal</Typography>
            <Typography variant="h5">$ {cart.cartTotalAmount}</Typography>
            </div>
            <div>
            <Typography>Taxes and Shipping may vary</Typography>
            <Button variant="outlined"> Checkout </Button>
            </div>
            <Button startIcon={<KeyboardBackspaceIcon />}>Continue Shopping</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Cart;
