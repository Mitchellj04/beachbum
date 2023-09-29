import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useDispatch, useSelector } from "react-redux";
import { newProductItem } from "../../Redux/Products /ProductSlice";
import { useNavigate } from "react-router-dom";
import { fetchAllCategory } from "../../Redux/Category/categorySlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { fetchAllGender } from "../../Redux/Gender/genderSlice";

const AdminUpload = () => {
  const fieldStyle = {
    margin: "5px auto",
  };

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("")

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.category);
  const genders = useSelector((state) => state.gender.gender)

  useEffect(() => {
    dispatch(fetchAllCategory());
    dispatch(fetchAllGender())
  }, []);

  console.log(image);
  console.log(categories);
  console.log(genders)

  // const newProduct = {
  //   product: {title,
  //   price,
  //   image,
  //   color: "blue",
  //   size: "M",
  //   category_id: 10
  //   }
  // }

  const cat_id = categories.filter((name) => name.item === category)
  const gender_id = genders.filter((type) => type.gender === gender)
  console.log(cat_id)

  const createNewItem = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("product[title]", title);
    data.append("product[price]", price);
    data.append("product[image]", image);
    data.append("product[color]", "blue");
    data.append("product[size]", "M");
    data.append("product[gender_id]", gender_id[0].id)
    data.append("product[category_id]", cat_id[0].id);
    console.log(data)
    dispatch(newProductItem(data));
    navigate("/admin/edit");
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  return (
    <div style={{ marginTop: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="admin-box" style={{justifyContent: 'center', alignItems: 'center', maxWidth: '500px'}}>
        <form onSubmit={createNewItem}>
          <div className="admin-form">
            <Typography variant="h5">Upload Product</Typography>
            <TextField
             fullWidth
              required
              autoFocus
              variant="standard"
              value={title}
              label="Product Title"
              style={fieldStyle}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
            fullWidth
              required
              autoFocus
              variant="standard"
              value={price}
              label="price"
              style={fieldStyle}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div>
            <FormControl>
              <FormLabel id="category-buttons-group-label">Category</FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                defaultValue="shirt"
                name="radio-buttons-group"
                onChange={handleCategory}
              >
                <FormControlLabel
                  value={"Shirt"}
                  control={<Radio />}
                  label={"Shirt"}
                />
                <FormControlLabel
                  value={"Shorts"}
                  control={<Radio />}
                  label={"Shorts"}
                />
                <FormControlLabel
                  value={"Long Sleeve"}
                  control={<Radio />}
                  label={"Long Sleeve"}
                />
                <FormControlLabel
                  value={"Swim suit"}
                  control={<Radio />}
                  label={"Swim"}
                />
                <FormControlLabel
                  value={"Pants"}
                  control={<Radio />}
                  label={"Pants"}
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="category-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                defaultValue="shirt"
                name="radio-buttons-group"
                onChange={handleGender}
              >
                <FormControlLabel
                  value={"Male"}
                  control={<Radio />}
                  label={"Male"}
                />
                <FormControlLabel
                  value={"Female"}
                  control={<Radio />}
                  label={"Female"}
                />
              </RadioGroup>
            </FormControl>
            </div>
            <input
              type="file"
              label="image"
              name="image"
              style={fieldStyle}
              accept="image/*"
              data-direct-upload-url="<%= rails_direct_uploads_url %>"
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminUpload;
