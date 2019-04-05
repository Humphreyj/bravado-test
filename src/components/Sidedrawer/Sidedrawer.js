import React from 'react';
import { NavLink } from 'react-router-dom'
import './Sidedrawer.css'


const Sidedrawer = (props) => {

	let drawerClasses = 'side-navbar';
	if(props.show) {
		drawerClasses = 'side-navbar open'
	}
    return (
    	<nav className={drawerClasses}>
    		<h1 className="bravado-nav">Bravado</h1>
    		<ul className="side-nav">
    			<NavLink to='/' className="side-nav-item">Home</NavLink>
    			<NavLink to ='/services' className="side-nav-item">Services</NavLink>
    			<NavLink to='/contact' className="side-nav-item">Contact</NavLink>
    		</ul>
    	</nav>
        
    );
};


export default Sidedrawer;

