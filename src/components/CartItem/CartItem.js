import React from 'react';
import './CartItem.css'
import remove from '../Icons/delete.svg'
import p1 from '../Photos/6.jpg'
import p2 from '../Photos/3.jpg'
import p3 from '../Photos/7.jpg'
import p4 from '../Photos/2.jpg'

const P1 = [{
	id:0,
	photos : [p1, p2],
	price : '100 EGP',
	description:'blah blah blah',
	productName : 'Headset',
},
{
	id:1,
	photos:[p3, p4],
	price: '20000 EGP',
	productName: 'IPhone11'
},
{
	id:2,
	photos : [p2, p1],
	price : '120 EGP',
	productName : 'Headset',
},
{
	id:3,
	photos:[p4, p3],
	price: '21000 EGP',
	productName: 'IPhone11'
}]


const CartItem = ({id, onRemovingItem})=>{
	return(
		<div className='mb4'>
			<div className='item-container mh5'>
				<img src={P1[id].photos[0]} alt={p1.id}/>
				<div>
					<h2 > {P1[id].productName}</h2>
					<h3> {P1[id].price} </h3>
					<p> {P1[id].description} </p>
				</div>
				<img 
				 src={remove} alt='remove' 
				 className='remove' 
				 onClick={()=> onRemovingItem(id)}/>
			</div>
		</div>

	)
}

export default CartItem