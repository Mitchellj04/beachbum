import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Redux/Products /ProductSlice";
import CartSlice from "../Redux/Cart/CartSlice";



const store = configureStore({
    reducer: {
        products: ProductSlice,
        cart: CartSlice
    }
})


export default store