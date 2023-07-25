import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartTotals, decreaseCart, increaseCart, removeItem, clearCart } from "../Redux/Cart/CartSlice";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import '../Cart.css'
import { createOrder } from "../Redux/Orders/OrderSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const [error, setError] = useState([])
 console.log(cart.cartItems.length);

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

  const clearCartItem = () => {
    dispatch(clearCart())
  }

  const continueCheckout = () => {
    if(cart.cartItems.length === 0){
      setError(['There are no items in cart'])
    }
    else {
      navigate('/checkout')
      setError([])
    }
  }
  const data = {
    order: { user_id: 8 },
    products: [29, 30]
  }

  const handleSubmitOrder = (e) => {
    e.preventDefault()
    dispatch(createOrder(data))
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

  const shopping = cart.cartItems.map((product) => {
    return (
      <tr>
        <td><img
              component="img"
              src={product.image}
              style={{ height: 200 }}/></td>
              <td>
                <div><Typography>{product.title}</Typography></div>
                <div><Typography>{product.color}</Typography></div>
                <div><Typography>{product.size}</Typography></div>
                <div style={{display: 'flex'}}>
                <Button onClick={() => decreaeCartItem(product)}>-</Button> 
              <p>{product.cartQuantity}</p>
                <Button onClick={() => increaseCartItem(product)}>+</Button>
            </div>
              </td>
              <td><Typography>$ {product.price}/ea</Typography></td>
      </tr>
    );
  });

  return (
    <div id="cart" className='cart'>
      <div className="cart-title">
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
          <div className="fullCart">
            <div className="cartItems">
              <table className="cart-table">
                <tbody>
                  {shopping}
                  </tbody>
                  </table>
                  <Button style={{width: 225, margin: 50}} variant='outlined' onClick={() => clearCartItem()}>Clear</Button>
            </div>      
          <div className='cart-total'>
            <div className="cart-summary-wrapper">
            <div className="cart-subtotal">            
            <Typography variant="h4">Subtotal:   </Typography>
            <span><Typography variant="h5">$ {cart.cartTotalAmount}</Typography></span>
            </div>
            <div className='cart-info'>
            <Typography>Taxes and Shipping may vary</Typography>
            </div>
            <div className="cart-buttons">
            <Button className="btn" variant="outlined" onClick={continueCheckout}> Checkout </Button>
            {error.map((er) => <Alert severity="error">{er}</Alert>)}
            
            <Button className="btn" startIcon={<KeyboardBackspaceIcon />} onClick={() => navigate('/products')}>Continue Shopping</Button>
            </div>
   </div>
      </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Cart;
