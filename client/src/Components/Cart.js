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
import { createOrder } from "../Redux/Orders/OrderSlice";

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
              <td><Typography>$ {product.price}</Typography></td>
      </tr>
      // <Grid container>
      //   <Grid item xs={4}>
      //     <div className="cart-product-div">
      //       <img
      //         component="img"
      //         src={product.image}
      //         style={{ height: 200 }}/>
      //       <Typography>Color: {product.color}</Typography>
      //       <Typography>Size: {product.size}</Typography>
      //       <Button onClick={() => handleRemoveItem(product)}>Remove</Button>
      //     </div>
      //   </Grid>
      //   <Grid xs={2}>
      //     <Typography>$ {product.price}</Typography>
      //   </Grid>
      //   <Grid xs={2}>
      //     <div style={{display: 'flex'}}>
      //       <Button onClick={() => decreaeCartItem(product)}>-</Button> 
      //       <p>{product.cartQuantity}</p>
      //       <Button onClick={() => increaseCartItem(product)}>+</Button>
      //     </div>
      //   </Grid>
      //   <Grid xs={2}>
      //     <Typography>$ {product.price * product.cartQuantity}</Typography>
      //   </Grid>
      // </Grid>
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
            <div className="grid-titles">
              {/* <Grid container>
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
              </Grid> */}
            </div>
            <div className="cartItems">
              <table>
                <tbody>
                  {shopping}
                  </tbody>
                  </table>
            </div>
          </div>
        )}
      </div>
      <div className='cart-total'>
          <Box className='cart-clear'>
            <Button style={{width: 225, margin: 50}} variant='outlined'>Clear</Button>
          </Box>
          <Box className='cart-subtotal'>
            <div >            
            <Typography style={{width: '50%'}} variant="h4">Subtotal:   $ {cart.cartTotalAmount}</Typography>
            <Typography style={{width: '50%'}} variant="h5"></Typography>
            </div>
            <div className='cart-info'>
            <Typography>Taxes and Shipping may vary</Typography>
            <Button style={{width: 225}} variant="outlined" onClick={() => navigate("/checkout")}> Checkout </Button>
            </div>
            <Button startIcon={<KeyboardBackspaceIcon />}>Continue Shopping</Button>
          </Box>
   
      </div>
    </div>
  );
};

export default Cart;
