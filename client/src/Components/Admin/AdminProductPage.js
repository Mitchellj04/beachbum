import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminProducts from './AdminProducts'
import { fetchAllProducts } from '../../Redux/Products /ProductSlice'

const AdminProductPage = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    },[])

    const products = useSelector((state) => state.products.products)

    const mapProducts = products.map((item) => <AdminProducts item={item}/>)

  return (
    <div>
        {mapProducts }
    </div>
  )
}

export default AdminProductPage