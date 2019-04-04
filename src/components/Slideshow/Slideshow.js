import React from 'react'
import { Slide } from 'react-slideshow-image'
import cuteDog1 from '../../img/cuteDog1.jpg'
import cuteDog2 from '../../img/cuteDog2.jpg'
import cuteDog3 from '../../img/cuteDog3.jpg'
import cuteDog4 from '../../img/cuteDog4.jpg'
import cuteDog5 from '../../img/cuteDog5.jpg'

import './Slideshow.css'


const slideImages = [

	{cuteDog1},
	{cuteDog2},
	{cuteDog3},
	{cuteDog4},
	{cuteDog5}
	
]

const properties = {
	duration: 1500,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: false
}

const Slideshow = () => {
	return(
	<Slide {...properties}>
		<div className="each-slide">
			<div style={{'backgroundImage': `url(${cuteDog1})`}}>
				
			</div>
		</div>

		<div className="each-slide">
			<div style={{'backgroundImage': `url(${cuteDog2})`}}>
				
			</div>
		</div>

		<div className="each-slide">
			<div style={{'backgroundImage': `url(${cuteDog3})`}}>
				
			</div>
		</div>

		<div className="each-slide">
			<div style={{'backgroundImage': `url(${cuteDog4})`}}>
				
			</div>
		</div>

		<div className="each-slide">
			<div style={{'backgroundImage': `url(${cuteDog5})`}}>

			</div>
		</div>
</Slide>
		)
	
}

export default Slideshow