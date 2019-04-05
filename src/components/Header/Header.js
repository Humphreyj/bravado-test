import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom'
import Hamburger from './Hamburger'

const Header = (props) => {
    return (
	<div className="header">
		<div className="banner">
		</div>
		<nav className="navbar">
			<ul className="nav">
				<NavLink to='/' className='nav-item'>Home</NavLink>
				<NavLink to='/services' className='nav-item'>Services</NavLink>
				<NavLink to='/contact' className='nav-item'>Contact</NavLink>
			</ul>
		</nav>
		<div className="nav-toggle">
			<Hamburger click={props.drawerToggleHandler} />
		</div>
		<p className="nav-subtitle">Trim, Cut, Groom and BRAVADO</p>
	</div>
	);
};


export default Header;
