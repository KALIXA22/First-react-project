import React  from 'react';
import Logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom';
import '../styles/navbar.css';
function Navbar() {
    return(
        <div className="navbar">
            <div className="section-content">
                <img src={Logo} alt="Denzo" />
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/menu" >Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact" >Contact</Link>
                </div>
            </div>
        </div>
    )

};

export default Navbar;

