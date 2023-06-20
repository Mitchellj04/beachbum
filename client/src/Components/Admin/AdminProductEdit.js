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

const AdminProductEdit = ({ product, hideEditProduct, setHideEditProduct }) => {

    console.log(product)
    
  const dispatch = useDispatch();

  const [productEdit, setProductEdit] = useState(product);
  const handleChange = (e) => {
    setProductEdit({ ...productEdit, [e.target.name]: e.target.value });
  };


  const fieldStyle = {
    margin: "5px auto",
  };

  const handleProductClose = () => {
    setHideEditProduct(false);
  };

  const handleProductEdit = (e) => {
    e.preventDefault();
    let id = product.id;
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
            <TextField
              fullWidth
              label="description"
              name="description"
              style={fieldStyle}
              value={productEdit.description}
              onChange={handleChange}
            />
            <input
              type="file"
              label="image"
              name="image"
              onChange={handleChange}>
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
