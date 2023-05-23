import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)
  console.log(cart)

  const items = cart.cartItems.map((product) => {
      return <Grid container>
       <Grid item xs={4}>
              <img component='img' src={product.image}></img>
        </Grid>
        <Grid xs={2}><Typography>Color: {product.color}</Typography></Grid>
        <Grid xs={2}><Typography>Size: {product.size}</Typography></Grid>
        <Grid xs={2}><Typography>$ {product.price}</Typography></Grid>
                  
      </Grid>
  })

  return (
    <div id='cart' style={{marginTop: '20vh'}}>
      <div>
        <Typography variant='h3'>Shopping Cart</Typography>
      </div>
      <div>
        {cart.cartItems.length === 0 ? (
          <div className='emptyCart'>
            <Typography>Your cart is currently empty</Typography>
            <Box>
              <Button onClick={() => navigate('/products')}>Continue Shopping</Button>
            </Box>
          </div>
        ) : (
          <div>
            <div className='titles'>
                <Grid container>
                  <Grid item xs={4}>
                      <Typography variant='h5'>Product</Typography>
                  </Grid>
                  <Grid item xs={2}>
                  <Typography variant='h5'>Product</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h5'>Product</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h5'>Product</Typography>
                    </Grid>
                </Grid>
            </div>
            <div className='cartItems'>
              {items}
              </div>
          </div>
        ) }
      </div>
    </div>
  )
}

export default Cart