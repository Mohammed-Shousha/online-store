import React from 'react';
import './Item.css';

const SmallNav ='pointer s-nav mv1 mh3 pv1';

const Item=({name,elements=[]})=>{
	let len = elements.length;
	return len? 
		<div className='dropdown'>
			<p className= {SmallNav}> {name} </p>
			<div className='dropdown-content'>
			{elements.map(x => <p>{x}</p>)}
			</div>
		</div>:

		<div className='dropdown'>
			<p className= {SmallNav}> {name} </p>
		</div>
}

export default Item;