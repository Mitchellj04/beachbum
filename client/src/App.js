import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ProductItem from './Components/ProductItem';
import About from './Components/About';
import Cart from './Components/Cart';
import Checkout from './Components/Profile/Checkout';
import Confirm from './Components/Checkout/Confirm';
import Payment from './Components/Checkout/Payment';
import AdminUpload from './Components/Admin/AdminUpload';
import AdminLogin2 from './Components/Admin/AdminLogin2';
import AdminProductPage from './Components/Admin/AdminProductPage';





function App() {
  return (
    <div className="App">
        <Navbar/>
        <Footer />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/item' element={<ProductItem/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/confirm' element={<Confirm />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/admin' element={<AdminUpload />}/>
          <Route path='/admin/login' element={<AdminLogin2 />} />
          <Route path='/admin/edit' element={<AdminProductPage />}/>
        </Routes>
    </div>
  );
}

export default App;
