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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { editProductItem } from "../../Redux/Products /ProductSlice";
import { fetchAllGender } from "../../Redux/Gender/genderSlice";

const AdminProductEdit = ({ product, hideEditProduct, setHideEditProduct }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGender());
  }, []);

  const genders = useSelector((state) => state.gender.gender);
  const [gender, setGender] = useState("");

  const [productEdit, setProductEdit] = useState(product);

  const handleChange = (e) => {
    setProductEdit({ ...productEdit, [e.target.name]: e.target.value });
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleFileUpload = (e) => {
    setProductEdit({ ...productEdit, [e.target.name]: e.target.files[0] });
  };

  const gender_id = genders.filter((item) => item.gender === gender);
  console.log(gender_id);

  const editedProduct = {
    title: productEdit.title,
    size: productEdit.size,
    color: productEdit.color,
    image: productEdit.image,
    price: productEdit.price,
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
    const data = new FormData();
    data.append("product[title]", productEdit.title);
    data.append("product[price]", productEdit.price);
    data.append("product[image]", productEdit.image);
    data.append("product[color]", productEdit.color);
    data.append("product[size]", productEdit.size);
    data.append("product[gender]", gender_id[0].id);
    dispatch(editProductItem({ id, data }));
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
              onChange={handleFileUpload}
            ></input>
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
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                defaultValue={'Male'}
                name="controlled-radio-buttons-group"
                onChange={handleGender}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
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
