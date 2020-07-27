import React, {Fragment, useState} from 'react'
import './Shipping.css'
import GMap from '../GMap/GMap'
import add from '../Icons/add.svg'
import prev from '../Icons/prev.svg'


const Shipping =({signUpData,setSignUpData, marker, setMarker, newAddress, setNewAddress})=>{

	const {name, addresses, phone} = signUpData

	const [selectedAddress, setSelectedAddress] = useState(0)

	const handleAddressSelect =(id)=>{
		setSelectedAddress(id)
	}

	const handleAddingAddress =()=>{
		setNewAddress(false)
		setSignUpData({ ...signUpData,
		 addresses:[...addresses,{name:name, address:`lat:${marker.lat}  lng:${marker.lng}`, phone:phone}]})
	}

	const filteredAddresses = addresses.filter(a=> a.address!=='')

	return(
		<Fragment>
			<h2 className='shipping-title'> Shipping Address</h2>
			{!newAddress?
			<div className='flex'>
					{filteredAddresses.map((a,i)=>(
						<div key={i}
						 onClick={()=>handleAddressSelect(i)} 
						 className={`shipping-details ${i===selectedAddress? 'active-address': ''}`}
						>
							<h3>Address {i+1}</h3>
							<div>
								Name
								<p className='shipping-name'>{a.name}</p>
							</div>
							<div>
								Address
								<p className='shipping-address'>{a.address}</p>
							</div>
							<div>
								Phone
								<p className='shipping-phone'>{a.phone}</p>
							</div>
						</div>
					))}

				<div 
				 className='shipping-details new-address'
				 onClick={()=>setNewAddress(true)}>
					<img src={add} alt='add' className='add-sign'/>
					 <p>Add a New Address</p>
				</div>
			</div>
			:<Fragment>
				<div 
				 className='back-to-addresses'
				 onClick={()=>setNewAddress(false)}>
					<h3>
						<img src={prev} alt='back'/>
						Back to Addresses 
					</h3>
				</div>
				<GMap
				 marker={marker}
				 setMarker={setMarker}
				/>
				<button
				 className='confirm-location'
				 onClick={handleAddingAddress}
				>
					Confirm
				</button>
			</Fragment>}
		</Fragment>
	)
}

export default Shipping