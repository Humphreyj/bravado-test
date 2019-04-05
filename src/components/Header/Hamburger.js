import React from 'react';

const Hamburger = (props) => {
    return (
    	<i className="fas fa-bars fa-2x" onClick={props.click}></i>
        
    );
};

export default Hamburger;
