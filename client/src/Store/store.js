import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Redux/Products /ProductSlice";



const store = configureStore({
    reducer: {
        products: ProductSlice
    }
})


export default store