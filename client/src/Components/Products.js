import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Link, Typography } from '@mui/material'
import '../Product.css'
import { useSelector } from 'react-redux'

const Products = () => {

    // const [products, setProducts] = useState([])
    const products = useSelector((state) => state.products.products)


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