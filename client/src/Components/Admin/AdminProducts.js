import React, { useState } from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, InputLabel, Link, Typography } from '@mui/material'
import AdminProductEdit from './AdminProductEdit'

const AdminProducts = ({item}) => {
    
    const [hideEditProduct, setHideEditProduct] = useState(false)
    console.log(hideEditProduct)
    

    const handleProductEdit = () => {
        setHideEditProduct(true)
    }


  return (
    <div>
<Grid item xs={4} className='product-grid-item'>
                <Card className='product-card'>
                        <CardMedia component='img' image={item.image} ></CardMedia>
                        <CardContent>
                            <Typography variant={'h5'}>{item.title}</Typography>
                            <Typography>$ {item.price}</Typography>
                        </CardContent>
                        {<AdminProductEdit product={item} hideEditProduct={hideEditProduct} setHideEditProduct={setHideEditProduct}/>}
                        <Button onClick={() => handleProductEdit(item)}>Edit</Button>
                </Card>
            </Grid>
    </div>
  )
}

export default AdminProducts