import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Link, Typography } from '@mui/material'
// import swim from '../Products/swim1.jpg'
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


    const mapProducts = featured.slice(0, 5).map((item) => {
        return <Grid item xs={2} style={{margin: 20}}>
                <Card>
                    <CardActionArea onClick={() => navigate('/products')}>
                        <CardMedia component='img' image={item.image}></CardMedia>
                        <CardContent>
                            <Typography variant='h6'>{item.title}</Typography>
                            <Typography>$ {item.price}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
    })

  return (
    <div className='home-products'>
            <Typography variant='h4' style={{textAlign: 'center'}}>Featured Products</Typography>
            <div>

           
            <Grid container style={{justifyContent:'center'}}>
                    {mapProducts}
            </Grid>
         </div>
        </div>
  )
}

export default Featured