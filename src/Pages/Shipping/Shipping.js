import React, { Fragment, useState, useContext } from 'react'
import GMap from '../../Containers/GMap/GMap'
import Title from '../../Components/Title'
import FlexContainer from '../../Components/FlexContainer'
import { ShippingDetails, BackTitle } from '../../Components/ShippingComponents'
import { MapButton } from '../../Components/Buttons'
import { DataContext } from '../../Data/DataContext'
import { editAddresses } from '../../Data/DataActions'
import { LocationContext } from '../../Data/LocationContext'
import add from '../../Data/Icons/add.svg'
import prev from '../../Data/Icons/prev.svg'


const Shipping = ({ newAddress, setNewAddress }) => {

	const { marker, setMarker } = useContext(LocationContext)

	const { data, setData } = useContext(DataContext)
	const { name, addresses, phone } = data

	const [selectedAddress, setSelectedAddress] = useState(0)

	const handleAddressSelect = (id) => {
		setSelectedAddress(id)
	}

	const handleAddingAddress = () => {
		setNewAddress(false)
		setData(editAddresses(
			[...addresses,
			{ name: name, address: `lat:${marker.lat} lng:${marker.lng}`, phone: phone }
			]
		))
		setMarker({ lat: '', lng: '' })
	}

	const filteredAddresses = addresses.filter(a => a.address !== '')

	return (
		<Fragment>
			<Title h2> Shipping Address </Title>
			{!newAddress ?
				<FlexContainer>
					{filteredAddresses.map((a, i) => (
						<ShippingDetails
							key={i}
							onClick={() => handleAddressSelect(i)}
							active={i === selectedAddress}
						>
							<h3>Address {i + 1}</h3>
							<div>
								Name
								<p><strong>{a.name}</strong></p>
							</div>
							<div>
								Address
								<p>{a.address}</p>
							</div>
							<div>
								Phone
								<p>{a.phone}</p>
							</div>
						</ShippingDetails>
					))}

					<ShippingDetails new onClick={() => setNewAddress(true)}>
						<img src={add} alt='add' />
						<p>Add a New Address</p>
					</ShippingDetails>
				</FlexContainer>

			: 	<Fragment>
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
				</Fragment>
			}
		</Fragment>
	)
}

export default Shipping