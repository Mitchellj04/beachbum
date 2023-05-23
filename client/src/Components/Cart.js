import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const Cart = () => {
  return (
    <div id='cart' >
      <Grid container>
          <Grid item>
            <Typography>In your bag</Typography>
            <Card>
              <CardMedia></CardMedia>
              <CardContent>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
              <Typography>Order Summary:</Typography>
              <Button>Continue</Button>
          </Grid>
      </Grid>
    </div>
  )
}

export default Cart