import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { editProductItem } from "../../Redux/Products /ProductSlice";

const AdminProductEdit = ({ product, hideEditProduct, setHideEditProduct }) => {

    console.log(product)
    
  const dispatch = useDispatch();

  const [productEdit, setProductEdit] = useState(product);
  const handleChange = (e) => {
    setProductEdit({ ...productEdit, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setProductEdit({...productEdit, [e.target.name]: e.target.files[0]})
  }

  console.log(productEdit)

  const editedProduct = {
    title: productEdit.title,
    size: productEdit.size,
    color: productEdit.color,
    image: productEdit.image,
    price: productEdit.price
  }

  const fieldStyle = {
    margin: "5px auto",
  };

  const handleProductClose = () => {
    setHideEditProduct(false);
  };

  const handleProductEdit = (e) => {
    e.preventDefault();
    let id = product.id
    const data = new FormData()
    data.append('product[title]', productEdit.title)
    data.append('product[price]', productEdit.price)
    data.append('product[image]', productEdit.image)
    data.append('product[color]', productEdit.color)
    data.append('product[size]', productEdit.size)
    dispatch(editProductItem({id, data}))
  };

  return (
    <>
      <Dialog
        open={hideEditProduct}
        keepMounted
        onClose={handleProductClose}
        maxWidth="lg"
      >
        <DialogTitle>Edit Project</DialogTitle>
        <form onSubmit={handleProductEdit}>
          <DialogContent>
            <TextField
              fullWidth
              label="title"
              name="title"
              style={fieldStyle}
              value={productEdit.title}
              onChange={handleChange}
            />
            <input
              type="file"
              label="image"
              name="image"
              onChange={handleFileUpload}>
              </input>
            <TextField
              fullWidth
              label="size"
              name="size"
              style={fieldStyle}
              value={productEdit.size}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="color"
              name="color"
              style={fieldStyle}
              value={productEdit.color}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              type="number"
              label="price"
              name="price"
              style={fieldStyle}
              value={productEdit.price}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
            <Button onClick={handleProductClose}>Close</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AdminProductEdit;
