import {Link} from 'react-scroll'
import React, { useState } from 'react'
import logo from '../Images/logo-no-background.png'
import '../Navbar.css'
import { useNavigate } from 'react-router'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'

const NavBar = () => {
  const [click, setClick] = useState(false)
  const quantity = useSelector((state) => state.cart.cartTotalQuantities)
  const navigate = useNavigate()

  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
        <nav className='navbar' style={{ background: 'transparent', boxShadow: 'none'}}>
                <Link to='home' spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}><img className='logo' src={logo}></img></Link>
                  <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                  <li className='nav-item'><Link to="home" spy={true} smooth={true} offset={-150} duration={500} onClick={()=> navigate('/')}>Home</Link></li>
                    <li className='nav-item'><Link to="products" spy={true} smooth={true} offset={-150} duration={500} onClick={()=> navigate('/products')}>Products</Link></li>
                    <li className='nav-item'><Link to="about" spy={true} smooth={true} offset={-150} duration={500} onClick={()=> navigate('/about')}>About</Link></li>
                    <li className='nav-item'><Link to="cart" spy={true} smooth={true} offset={-150} duration={500} onClick={() => navigate('/cart')}><ShoppingCartIcon />({quantity})</Link></li>
                    
                  </ul>
        </nav>
    </div>
  )
}

export default NavBar