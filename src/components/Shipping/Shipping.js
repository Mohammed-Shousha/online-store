import React, {Fragment, useState} from 'react'
import './Shipping.css'
import add from '../Icons/add.svg'
import {Addresses} from '../Database'


const Shipping =()=>{

	const[addressId, setAddressId] = useState(1)

	const handleAddressChange =(id)=>{
		setAddressId(id)
	}

	return(
		<Fragment>
			<h2 className='shipping-title'> Shipping Address</h2>
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
								<p className='shipping-name'>{a.Name}</p>
							</div>
							<div>
								Address
								<p className='shipping-address'>{a.Address}</p>
							</div>
							<div>
								Phone
								<p className='shipping-phone'>{a.Phone}</p>
							</div>
						</div>
					)
				})}

				<div className='shipping-details new-address'>
					<img src={add} alt='add' className='add-sign'/>
					 <p>Add a New Address</p>
				</div>
			</div>
		</Fragment>
	)
}

export default Shipping
