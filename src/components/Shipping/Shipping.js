import React, { Fragment, useState, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { editAddresses } from '../../context/DataActions'
import { LocationContext } from '../../context/LocationContext'
import GMap from '../GMap/GMap'
import add from '../Icons/add.svg'
import prev from '../Icons/prev.svg'
import Title from '../StyledComponents/Title'
import FlexContainer from '../StyledComponents/FlexContainer'
import { ShippingDetails, BackTitle } from '../StyledComponents/ShippingComponents'
import { MapButton } from '../StyledComponents/Buttons'


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