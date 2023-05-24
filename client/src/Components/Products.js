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
        return <Grid item xs={5}>
                <Card className='product-card'>
                    <CardActionArea>
                        <CardHeader title={item.title}></CardHeader>
                        <CardMedia component='img' image={item.image} style={{width: 500}}></CardMedia>
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
          <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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
        <Grid container>
            {mapProducts}
        </Grid>
    </div>
  )
}

export default Products