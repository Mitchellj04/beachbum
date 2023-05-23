import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Link, Typography } from '@mui/material'
import '../Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../Redux/Products /ProductSlice'
import pants  from '../Products/pants1.jpg'
import pants2 from '../Products/pants2.jpg'
import shirt1 from '../Products/shirt1.jpg'
import shirt2 from '../Products/shirt2.jpg'
import { addCart } from '../Redux/Cart/CartSlice'

const Products = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    },[])
    // const [products, setProducts] = useState([])
    const products = useSelector((state) => state.products.products)
    const cart = useSelector((state) => state.cart)

    console.log(cart)

    const handleAddToCart = (product) => {
        dispatch(addCart(product))
    }

    const mapProducts = products.map((item) => {
        return <Grid item>
                <Card>
                    <CardActionArea>
                        <CardHeader title={item.title}></CardHeader>
                        <CardMedia component='img' image={item.image}></CardMedia>
                        <CardContent>
                            <Typography>Color: {item.color}</Typography>
                            <Typography>Size: {item.size}</Typography>
                            <Typography>$ {item.price}</Typography>
                            <Button onClick={() => handleAddToCart(item)}>Add Cart</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
    })

  return (
    <div className='product-div'>
        <Grid container>
            {mapProducts}
        </Grid>
    </div>
  )
}

export default Products