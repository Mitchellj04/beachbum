import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Featured from './Featured'
import '../ProductItem.css'
import { useNavigate } from 'react-router-dom'
import { addCart } from '../Redux/Cart/CartSlice'

const ProductItem = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productItem = useSelector((state) => state.products.item)
  console.log(productItem)

  const handleAddToCart = (product) => {
    dispatch(addCart(product))
    navigate('/cart')
}

  return (
    <div className='product-page'>
      <div >
        <Grid container className='product-info'>
          <Grid item xs={6}>
              <img src={productItem.image}></img>
          </Grid>
          <Grid item xs={4} style={{margin: 20}}>
            <div className='product-details'>
            <Typography variant='h5'>{productItem.title}</Typography>
            <Typography>$ {productItem.price}</Typography>
            <Typography>Size: {productItem.size}</Typography>
            <Button variant='contained' onClick={() => handleAddToCart(productItem)}>Add to bag</Button>
            </div>
          </Grid>
        </Grid>
        </div>
        <div>
        <Featured />
        </div>
    </div>
  )
}

export default ProductItem