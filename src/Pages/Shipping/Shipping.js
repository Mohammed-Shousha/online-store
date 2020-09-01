import React, { useContext } from 'react'
import GMap from '../../Containers/GMap/GMap'
import { CheckoutTitle } from '../../Components/Title'
import FlexContainer from '../../Components/FlexContainer'
import { ShippingDetails, BackTitle } from '../../Components/ShippingComponents'
import { MapButton } from '../../Components/Buttons'
import { DataContext } from '../../Data/DataContext'
import { editAddresses } from '../../Data/DataActions'
import { LocationContext } from '../../Data/LocationContext'
import add from '../../Data/Icons/add.svg'
import prev from '../../Data/Icons/prev.svg'


const Shipping = ({ newAddress, setNewAddress, activeAddress, setActiveAddress }) => {

	const { marker, setMarker } = useContext(LocationContext)

	const { data, setData } = useContext(DataContext)
	const { name, addresses, phone } = data

	const handleAddingAddress = () => {
		setNewAddress(false)
		setData(editAddresses(
			[...addresses,
			{ name, address: `lat:${marker.lat} lng:${marker.lng}`, phone }
			]
		))
		setMarker({ lat: '', lng: '' })
	}

	const filteredAddresses = addresses.filter(a => a.address !== '')

	return (
		<>
			<CheckoutTitle h1> Shipping </CheckoutTitle>
			{!newAddress ?
				<FlexContainer responsive>
					{filteredAddresses.map((a, i) => (
						<ShippingDetails
							key={i}
							onClick={() => setActiveAddress(a)}
							active={a === activeAddress}
						>
							<h3> Address {i + 1} </h3>
							<div>
								<h4> Name </h4>
								<p><strong>{a.name}</strong></p>
							</div>
							<div>
								<h4> Address </h4>
								<p>{a.address}</p>
							</div>
							<div>
								<h4> Phone </h4>
								<p>{a.phone}</p>
							</div>
						</ShippingDetails>
					))}

					<ShippingDetails new onClick={() => setNewAddress(true)}>
						<img src={add} alt='add' />
						<p>Add a New Address</p>
					</ShippingDetails>
				</FlexContainer>
			: 	
				<>
					<BackTitle onClick={() => setNewAddress(false)}>
						<img src={prev} alt='back' />
						Back to Addresses
					</BackTitle>
					<GMap
						marker={marker}
						setMarker={setMarker}
					/>
					<MapButton grey onClick={handleAddingAddress}>
						Confirm
					</MapButton>
				</>
			}
		</>
	)
}

export default Shipping