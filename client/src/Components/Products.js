import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import "../Product.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchProductItem,
} from "../Redux/Products /ProductSlice";
// import pants  from '/public/Products/pants1.jpg'
// import pants2 from '/public/Products/pants2.jpg'
// import shirt1 from '/public/Products/shirt1.jpg'
// import shirt2 from '/public/Products/shirt2.jpg'
import { addCart } from "../Redux/Cart/CartSlice";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  // const [products, setProducts] = useState([])
  const [category, setCategory] = useState("");
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  console.log(products);
  const filtered = products.filter(
    (product) => product.category.item === category
  );
  console.log(filtered);

  const handleAddToCart = (product) => {
    dispatch(addCart(product));
    navigate("/cart");
  };

  const handleProjectItem = (item) => {
    dispatch(fetchProductItem(item.id));
    navigate("/item");
  };

  const mapProducts = products.map((item) => {
    return (
      <Grid item xs={4} className="product-grid-item">
        <Card className="product-card">
          <CardActionArea onClick={() => handleProjectItem(item)}>
            <CardMedia component="img" image={item.image}></CardMedia>
          </CardActionArea>
          <CardContent>
            <Typography variant={"h5"}>{item.title}</Typography>
            <Typography>$ {item.price}</Typography>
            <Button onClick={() => handleAddToCart(item)}>Add Cart</Button>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div className="product-div">
      <div className="product-filter">
        <div className="filter-dropdown">
          <Accordion className="filter-accordion">
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
                  value={category}
                  label="Age"
                  onChange={handleCategory}
                >
                  <MenuItem value={"Shirt"}>Shirt</MenuItem>
                  <MenuItem value={"Pants"}>Pants</MenuItem>
                  <MenuItem value={"Swim"}>Swim</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="select-label">Gender</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  //   value={category}
                  label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="search-bar">
          {" "}
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            fullWidth
          />
          <Button startIcon={<SearchIcon />}></Button>
        </div>
      </div>
      <Grid container className="product-grid">
        {mapProducts}
      </Grid>
    </div>
  );
};

export default Products;
