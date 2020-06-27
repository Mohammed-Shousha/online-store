import React from 'react';
import './Features.css';
import Circle from './Circle/Circle';
import money from './money.png'
import refund from './refund.png'
import shipping from './shipping.png'

const FEATURES =[
{
	tag:'Free Shipping',
	img: shipping,
	color : '#005c91',
	description:'All orders of 200.00 EGP or more qualify for FREE Shipping.'
},
{
	tag:'Cash on Delivery',
	img: money,
	color : '#009124',
	description:'Pay for your order in cash at the moment the shipment is delivered to your doorstep.'
},
{
	tag:'Free Refund',
	img: refund,
	color:'#ffb726',
	description:'Changed your mind, you can return your product and get a full refund.'
}]


const Feature = ()=>{
	return(
		<div className='container'>
			{FEATURES.map(feature =>{
				return(
					<Circle tag={feature.tag} img={feature.img}
					 color={feature.color} description={feature.description}/>
				)
			})}
		</div>
	)
}

export default Feature;