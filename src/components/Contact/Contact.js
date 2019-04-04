import React from 'react';

import './Contact.css'

const Contact = (props) => {
    return (
        <div className="contact-form">
			<h4 className="contact-text">Call or Text for appointments and inquires!! 512-769-8898</h4>
			<form action="#">
				<input 
				type="text" 
				className="contact-item"
				id='name'
				name='name'
				placeholder='Name'
				/>

				<br/>

				<input 
				type="text" 
				className="contact-item"
				id='email'
				name='email'
				placeholder='E-mail'
				/>

				<br/>

				<input 
				type="text" 
				className="contact-item"
				id='subject'
				name='subject'
				placeholder='Subject'
				/>

				<br/>

				<textarea
				className='contact-item'
				id='message'
				name='message'
				placeholder='Message here...'
				/>
				<br/>
				<button className="submit btn btn-primary">Submit</button>
			</form>

        </div>
    );
};

export default Contact;
