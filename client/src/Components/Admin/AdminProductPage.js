import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminProducts from './AdminProducts'
import { fetchAllProducts } from '../../Redux/Products /ProductSlice'
import AdminLogin2 from './AdminLogin2'
import { adminProfile } from '../../Redux/Admin/AdminSlice'

const AdminProductPage = () => {


    const dispatch = useDispatch()
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
    <div>
        {mapProducts }
    </div>
  )
}

export default AdminProductPage