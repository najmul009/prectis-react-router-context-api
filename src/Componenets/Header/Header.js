import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'



const Header = () => {
    
    return (
        <nav className='navbar'>
            <h1>Routing Context API</h1>
            <div >
                {/* SHOP */}
                <NavLink 
                className={({ isActive }) =>(isActive ? 'active' : 'unactive')} 
                to="/shop"
                >
                Shop
                </NavLink>
                {/* Orders  */}
                <NavLink 
                className={({ isActive }) =>(isActive ? 'active' : 'unactive')} 
                to="/orders"
                >
                Orders
                </NavLink>
                {/* CheckOut  */}
                <NavLink 
                className={({ isActive }) =>(isActive ? 'active' : 'unactive')} 
                to="/checkout"
                >
                CheckOut
                </NavLink>
                {/* About  */}
                <NavLink 
                className={({ isActive }) =>(isActive ? 'active' : 'unactive')} 
                to="/about"
                >
                About
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;