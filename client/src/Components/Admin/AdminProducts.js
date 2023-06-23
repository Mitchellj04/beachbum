import React, { useState } from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, InputLabel, Link, Typography } from '@mui/material'
import AdminProductEdit from './AdminProductEdit'
import { useDispatch } from 'react-redux'
import { deleteProductItem } from '../../Redux/Products /ProductSlice'

const AdminProducts = ({item}) => {
    
    const [hideEditProduct, setHideEditProduct] = useState(false)
    const dispatch = useDispatch()
    console.log(hideEditProduct)
    

    const handleProductEdit = () => {
        setHideEditProduct(true)
    }

    const handleProductDelete = (item) => {
      dispatch(deleteProductItem(item))
    }

    console.log(item.image)

  return (
    <div >
<Grid item xs={4} className='product-grid-item'>
                <Card className='product-card'>
                        <CardContent>
                            <img src={item.image} style={{ height: 200 }}/>
                            <Typography variant={'h5'}>{item.title}</Typography>
                            <Typography>$ {item.price}</Typography>
                        </CardContent>
                        {<AdminProductEdit product={item} hideEditProduct={hideEditProduct} setHideEditProduct={setHideEditProduct}/>}
                        <Button onClick={() => handleProductEdit(item)}>Edit</Button>
                        <Button onClick={() => handleProductDelete(item)}>Delete</Button>
                </Card>
            </Grid>
    </div>
  )
}

export default AdminProducts