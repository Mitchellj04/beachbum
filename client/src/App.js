import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ProductItem from './Components/ProductItem';
import About from './Components/About';


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
        </Routes>
    </div>
  );
}

export default App;
