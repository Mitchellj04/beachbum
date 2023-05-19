import {Link} from 'react-scroll'
import React, { useState } from 'react'
import logo from '../Images/logo-no-background.png'
import '../Navbar.css'

const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
        <nav className='navbar' style={{ background: 'transparent', boxShadow: 'none'}}>
                <Link to='home' spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}><img className='logo' src={logo}></img></Link>
                  <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                    <li className='nav-item'><Link to="home" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Products</Link></li>
                    <li className='nav-item'><Link to="about" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>About</Link></li>
                    <li className='nav-item'><Link to="skills" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Cart</Link></li>
                    
                  </ul>
        </nav>
    </div>
  )
}

export default NavBar