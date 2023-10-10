import React from 'react'
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    InputLabel,
    TextField,
    Typography,
  } from "@mui/material";

const ProductCard = ({products, handleAddToCart, handleProductItem}) => {

  console.log(products)

  return (
    <Grid item xs={4} className="product-grid-item">
        <Card className="product-card">
          <CardActionArea onClick={() => handleProductItem(products)}>
            <CardMedia component="img" image={products.image}></CardMedia>
          </CardActionArea>
          <CardContent>
            <Typography variant={"h5"}>{products.title}</Typography>
            <Typography>$ {products.price}</Typography>
            <Button onClick={() => handleAddToCart(products)}>Add Cart</Button>
          </CardContent>
        </Card>
      </Grid>
  )
}

export default ProductCard