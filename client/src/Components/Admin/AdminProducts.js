import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../Redux/Products /ProductSlice'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, InputLabel, Link, Typography } from '@mui/material'

const AdminProducts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    },[])

 
    const products = useSelector((state) => state.products.products)
    console.log(products)


    const handleProjectEdit = (item) => {
        
    }

    const mapProducts = products.map((item) => {
        return <Grid item xs={4} className='product-grid-item'>
                <Card className='product-card'>
                    <CardActionArea onClick={() => handleProjectEdit(item)}>
                        <CardMedia component='img' image={item.image} ></CardMedia>
                        <CardContent>
                            <Typography variant={'h5'}>{item.title}</Typography>
                            <Typography>$ {item.price}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
    })

  return (
    <div>
        {mapProducts}
    </div>
  )
}

export default AdminProducts