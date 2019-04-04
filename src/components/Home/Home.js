import React from 'react';
import Slideshow from '../Slideshow/Slideshow'
import './Home.css'

const Home = (props) => {
    return (
        <div className="home">
    	<div className="home-content">
            <div className="shop-pic"></div>
            <div className="address">
                <p className="address-actual">119 E North Loop Blvd, Austin, TX 78751</p>
                <p className="hours">Open Wednesday - Sunday 8am - 5ish</p>
                <p className="phone">Phone: 512-769-8898</p>
            </div>
			<p className="home-text">Bravado Dog Grooming is a small salon located in the heart of North Loop. We are a locally owned and family operated salon. We take pride in every cut and always aim to please while keeping your furbaby's best interest in mind. Whether you want a summer shave down, classic trim, or modern look, we're the grooming shop for you!</p>
    
                <Slideshow />
           
			
		<p className="home-text">Feel free to come by and say "Hello!" Our groomer has over 10 years of dog grooming experience here in Austin. Since we are a small salon we do not harvest furbabies or have pick-up hours. Upon your arrival we will promptly begin your furbaby's salon experience.</p>


			
    	</div>
    </div>
    );
};

export default Home;
