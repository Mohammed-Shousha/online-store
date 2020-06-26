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
	color : '#005c91'
},
{
	tag:'Cash on Delivery',
	img: money,
	color : '#009124'
},
{
	tag:'Free Refund',
	img: refund,
	color:'#ffb726'
}]


const Feature = ()=>{
	return(
		<div className='container'>
			{FEATURES.map(feature =>{
				return(
					<Circle tag={feature.tag} img={feature.img} color={feature.color}/>
				)
			})}
		</div>
	)
}

export default Feature;