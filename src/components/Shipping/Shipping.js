import React, {Fragment, useState} from 'react'
import './Shipping.css'
import GMap from '../GMap/GMap'
import add from '../Icons/add.svg'
import {Addresses} from '../Database'


const Shipping =({name, address})=>{

	const [addressId, setAddressId] = useState(1)

	const handleAddressChange =(id)=>{
		setAddressId(id)
	}

	const [newAddress, setNewAddress]= useState(false)


	return(
		<Fragment>
			<h2 className='shipping-title'> Shipping Address</h2>
			{!newAddress?
			<div className='flex'>
				{Addresses.map(a=>{
					return(
						<div key={a.id}
						 onClick={()=>handleAddressChange(a.id)} 
						 className={a.id===addressId? 'shipping-details active-address': 'shipping-details'}
						>
							<h3>{a.label}</h3>
							<div>
								Name
								<p className='shipping-name'>{name}</p>
							</div>
							<div>
								Address
								<p className='shipping-address'>{address}</p>
							</div>
							<div>
								Phone
								<p className='shipping-phone'>{a.Phone}</p>
							</div>
						</div>
					)
				})}

				<div 
				 className='shipping-details new-address'
				 onClick={()=>setNewAddress(true)}>
					<img src={add} alt='add' className='add-sign'/>
					 <p>Add a New Address</p>
				</div>
			</div>
			:<Fragment>
				<h1> TO BE Map </h1>
				<button onClick={()=>setNewAddress(false)}> Confirm</button>
			</Fragment>}
		</Fragment>
	)
}

export default Shipping
