import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Admin.css'
import { useDispatch } from 'react-redux';
import { newProductItem } from '../../Redux/Products /ProductSlice';

const AdminUpload = () => {

    const fieldStyle = {
        margin: "5px auto",
      };

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const dispatch = useDispatch()
    console.log(image)

    // const newProduct = {
    //   product: {title,
    //   price,
    //   image,
    //   color: "blue",
    //   size: "M",
    //   category_id: 10
    //   }
    // }

    const createNewItem = (e) => {
      e.preventDefault()
      const data = new FormData()
      data.append("product[title]", title)
      data.append('product[price]', price)
      data.append('product[image]', image)
      data.append('product[color]', 'blue')
      data.append('product[size]', "M")
      data.append('product[category_id]', 10)
      dispatch(newProductItem(data))
    }

  return (
    <div style={{marginTop: '100px'}}>
        <div>
            <form onSubmit={createNewItem}>
            <div className='admin-form'>
            <Typography variant='h5'>Upload Product</Typography>
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
                <input
                  type="file"
                  label="image"
                  name="image"
                  style={fieldStyle}
                  accept='image/*'
                  data-direct-upload-url="<%= rails_direct_uploads_url %>"
                  onChange={(e) => setImage(e.target.files[0])}>
                  </input>
               <Button type='submit'>Submit</Button> 
              </div>
              
            </form>
        </div>
    </div>
  )
}

export default AdminUpload