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

const AdminUpload = () => {
  const fieldStyle = {
    margin: "5px auto",
  };

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.category);

  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);

  console.log(image);
  console.log(category);

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
  console.log(cat_id[0].id)

  const createNewItem = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("product[title]", title);
    data.append("product[price]", price);
    data.append("product[image]", image);
    data.append("product[color]", "blue");
    data.append("product[size]", "M");
    data.append("product[category_id]", cat_id[0].id);
    dispatch(newProductItem(data));
    navigate("/admin/edit");
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <form onSubmit={createNewItem}>
          <div className="admin-form">
            <Typography variant="h5">Upload Product</Typography>
            <TextField
              required
              autoFocus
              variant="standard"
              value={title}
              label="Product Title"
              style={fieldStyle}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              required
              autoFocus
              variant="standard"
              value={price}
              label="price"
              style={fieldStyle}
              onChange={(e) => setPrice(e.target.value)}
            />
            <FormControl>
              <FormLabel id="category-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                defaultValue="shirt"
                name="radio-buttons-group"
                onChange={handleCategory}
              >
                <FormControlLabel
                  value={"shirt"}
                  control={<Radio />}
                  label={"shirt"}
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
                  value={"Swim"}
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
