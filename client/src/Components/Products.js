import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, InputLabel, Link, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import '../Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts, fetchProductItem } from '../Redux/Products /ProductSlice'
import pants  from '../Products/pants1.jpg'
import pants2 from '../Products/pants2.jpg'
import shirt1 from '../Products/shirt1.jpg'
import shirt2 from '../Products/shirt2.jpg'
import { addCart } from '../Redux/Cart/CartSlice'
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleProjectItem = (item) => {
      dispatch(fetchProductItem(item.id))
      navigate('/item')
      
    }

    const mapProducts = products.map((item) => {
        return <Grid item xs={5} className='product-grid-item'>
                <Card className='product-card'>
                    <CardActionArea onClick={() => handleProjectItem(item)}>
                        <CardMedia component='img' image={item.image} style={{width: 500}}></CardMedia>
                        <CardContent>
                            <Typography variant={'h5'}>{item.title}</Typography>
                            <Typography>$ {item.price}</Typography>
                            <Button onClick={() => handleAddToCart(item)}>Add Cart</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
    })

  return (
    <div className='product-div'>
          <div className='filter-dropdown'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl fullWidth>
        <InputLabel id="select-label">Category</InputLabel>
        <Select
          
          labelId="select-label"
          id="simple-select"
        //   value={category}
          label="Age"
        //   onChange={handleChange}
        >
          <MenuItem value={'shirt'}>Shirt</MenuItem>
          <MenuItem value={'pants'}>Pants</MenuItem>
          <MenuItem value={'swim'}>Swim</MenuItem>
        </Select>
      </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
        <Grid container className='product-grid'>
            {mapProducts}
        </Grid>
    </div>
  )
}

export default Products