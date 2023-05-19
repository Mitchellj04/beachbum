import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ProductItem from './Components/ProductItem';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Footer />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/item' element={<ProductItem/>}/>
        </Routes>
    </div>
  );
}

export default App;
