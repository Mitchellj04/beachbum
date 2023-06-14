import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Admin.css'

const AdminUpload = () => {

    const fieldStyle = {
        margin: "5px auto",
      };

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

  return (
    <div style={{marginTop: '100px'}}>
        <div>
            <form>
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
                  value={description}
                  label="description"
                  style={fieldStyle}
                  onChange={(e) => setDescription(e.target.value)}
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
                <TextField
                  required
                  autoFocus
                  variant="standard"
                  value={image}
                  label="Image"
                  style={fieldStyle}
                  onChange={(e) => setImage(e.target.value)}
                />
               <Button>Submit</Button> 
              </div>
              
            </form>
        </div>
    </div>
  )
}

export default AdminUpload