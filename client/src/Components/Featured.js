import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Link, Typography } from '@mui/material'
import swim from '../Products/swim1.jpg'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../Redux/Products /ProductSlice'

const Featured = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const [featured, setFeatured]= useState([])

    const featured = useSelector((state) => state.products.products)


useEffect(() => {
    dispatch(fetchAllProducts())
}, [])


    const mapProducts = featured.map((item) => {
        return <Grid item xs={2}>
                <Card>
                    <CardActionArea onClick={() => navigate('/products')}>
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
    <div className='home-products'>
            <Typography variant='h4'>Featured Products</Typography>
            <Grid container>
                    {mapProducts}
            </Grid>
            <Carousel>
                {mapProducts}
            </Carousel>
        </div>
  )
}

export default Featured