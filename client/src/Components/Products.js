import React, { useEffect, useState } from "react";
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
import { addCart } from "../Redux/Cart/CartSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Fetch All Products 
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  // State to handle filter
  const [filters, setFilters] = useState("");
  const [category, setCategory] = useState("");
  const [genre, setGenre] = useState("");
  const [search, setSearch] = useState("")

  // Capture Products from Redux State
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart);

  // Filter Product Type 
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  // Filter Product Gender
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  // Function to determine what filter is being processed 
  const handleFilter = (e) => {
    if (category.length === 0) {
      if (genre.length > 0) {
        setFilters("genre");
      } else {
        setFilters("");
      }
    } else if (category.length > 0 && genre.length > 0) {
      setFilters("both");
    } else {
      setFilters("category");
    }
  }; 
  
  // Reset Filtered to Search Products
  const handleSearch = () => {
   setFilters('search')
  }

  // Reset button 
  const handleReset = () => {
    setCategory("");
    setGenre("");
    setFilters("");
  };


  // Display all products 
  const mapProducts = () => {
    return products.map((item) => {
      return <ProductCard products={item} handleAddToCart={handleAddToCart} handleProductItem={handleProductItem}/>
    });
  };

  // Display filtered product by type 
  const filterCategory = () => {
    let categoryProducts = products.filter(
      (product) => product.category.item === category
    );

    return categoryProducts.map((item) => {
      return <ProductCard products={item} handleAddToCart={handleAddToCart} handleProductItem={handleProductItem}/>
    });
  };

  // Display filtered product by gender
  const filterGender = () => {
    let genderProducts = products.filter(
      (product) => product.gender.gender === genre
    );
    return genderProducts.map((item) => {
      return <ProductCard products={item} handleAddToCart={handleAddToCart} handleProductItem={handleProductItem}/>
    });
  };


// Display filtered products by gender and type 
 const filterBoth = () => {
    let categoryFilter = products;
    let productFilter = [];

    categoryFilter = products.filter(
      (product) => product.category.item === category
    );
    productFilter = categoryFilter.filter(
      (product) => product.gender.gender === genre
    );

    return productFilter.map((item) => {
      return <ProductCard products={item} handleAddToCart={handleAddToCart} handleProductItem={handleProductItem}/>
    });
  }

  // Filter Products by search 
  const searchProduct = () => {
    let searchedProducts = []

    searchedProducts = products.filter((product) => search.toLowerCase() === "" ? product : product.title.toLowerCase().includes(search))

    return searchedProducts.map((item) => {
      return <ProductCard products={item} handleAddToCart={handleAddToCart} handleProductItem={handleProductItem}/>
    });
  }

  // Switch case to determine which products are being displayed 
  const filtered = () => {
    switch (filters) {
      case "":
        return mapProducts();
      case "category":
        return filterCategory();
      case "genre":
        return filterGender();
      case "both":
        return filterBoth();
      case 'search': 
        return searchProduct();
    }
  };

  // Add product to card and go to cart 
  const handleAddToCart = (product) => {
    dispatch(addCart(product));
    navigate("/cart");
  };

  // Navigation to single item
  const handleProductItem = (item) => {
    dispatch(fetchProductItem(item.id));
    navigate("/item");
  };

  return (
    <div className="product-div">
      <div className="product-filter">
        <div className="filter-dropdown">
          <Accordion className="filter-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
                <Typography>Filter</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl fullWidth >
                <InputLabel id="select-label">Category</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  value={category}
                  style={{marginTop: 10}}
                  label="Type"
                  onChange={handleCategory}>
                    <MenuItem value={"Shirt"}>Shirt</MenuItem>
                    <MenuItem value={"Pants"}>Pants</MenuItem>
                    <MenuItem value={"Swim suit"}>Swim</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="select-label">Gender</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  value={genre}
                  style={{marginTop: 10}}
                  label="Genre"
                  onChange={handleGenre}>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Unisex"}>Unisex</MenuItem>
                </Select>
              </FormControl>
              <Button onClick={handleFilter}>Filter</Button>
              <Button onClick={handleReset}>Reset</Button>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="search-bar">
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            onChange={(e) => setSearch(e.target.value)}
            fullWidth/>
          <Button startIcon={<SearchIcon />} onClick={handleSearch}></Button>
        </div>
      </div>
      <Grid container className="product-grid">
        {filtered()}
      </Grid>
    </div>
  );
};

export default Products;
