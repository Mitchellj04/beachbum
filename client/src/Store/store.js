import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Redux/Products /ProductSlice";
import CartSlice from "../Redux/Cart/CartSlice";
import OrderSlice from "../Redux/Orders/OrderSlice";
import UserSlice from "../Redux/User/UserSlice";




const store = configureStore({
    reducer: {
        products: ProductSlice,
        cart: CartSlice,
        order: OrderSlice,
        user: UserSlice
    }
})


export default store