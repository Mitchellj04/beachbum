import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminProducts from './AdminProducts'
import { fetchAllProducts } from '../../Redux/Products /ProductSlice'
import AdminLogin2 from './AdminLogin2'
import { adminProfile } from '../../Redux/Admin/AdminSlice'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AdminProductPage = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const errors = ["Please login first"]
    const adminLoggedIn = useSelector((state) => state.admin.adminLoggedIn)
    const error = useSelector((state) => state.admin.errors)
    const admin = useSelector((state) => state.admin.admin)

    console.log(error)
    console.log(admin)

    useEffect(() => {
        dispatch(adminProfile())
        dispatch(fetchAllProducts())
    },[])

    const products = useSelector((state) => state.products.products)

    const mapProducts = products.map((item) => <AdminProducts item={item}/>)

    // if(!adminLoggedIn) return <AdminLogin2 error={errors}/>
  return (
    <div style={{marginTop: 100}}>
      <Button onClick={() => navigate('/admin/upload')}>Upload</Button>
        {mapProducts }
    </div>
  )
}

export default AdminProductPage