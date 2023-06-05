import { Button, Grid, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Confirm = () => {


    const order  = useSelector((state) => state.cart) 
    const user = useSelector((state) => state.user.user)
    console.log(order)
    console.log(user)

  return (
    <div style={{marginTop: 100}}>
      <Grid container>
          <Grid item xs={5}>
              <Typography variant='h4'>Information</Typography>
              <div>
                  <Typography>Name: {user.name}</Typography>
                  <Typography>Address: {user.address}</Typography>
                  <Typography>Phone: {user.phone}</Typography>
                  <Typography>Email: {user.email}</Typography>
              </div>
              <div>
                <Typography variant='h4'>Shipping Information</Typography>
                
              </div>
          </Grid>
          <Grid item xs={5}>
              <Typography variant='h4'>Order</Typography>
              <div>
                {order.cartItems.map((item) => {
                  return <div style={{display: 'flex'}}>
                      <img style={{width: 80}} src={item.image}></img>
                      <Typography>{item.title}</Typography>
                      <Typography>{item.price}</Typography>
                  </div>
                })}
                <Typography>Subtotal:  ${order.cartTotalAmount}</Typography>
                <Typography>Shipping:  TBD</Typography>

                <Typography>Total: ${order.cartTotalAmount}</Typography>
              </div>

              <Button>Shipping Calculation</Button>
            </Grid>
      </Grid>

    </div>
  )
}

export default Confirm 