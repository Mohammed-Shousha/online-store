import React, { useContext, useState, useRef } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client'
import GMap from '../../Containers/GMap/GMap'
import { CheckoutTitle } from '../../Components/Title'
import FlexContainer from '../../Components/FlexContainer'
import ErrorText from '../../Components/ErrorText'
import { Button } from '../../Components/Buttons'
import { ShippingDetails, AddressActions, BackTitle } from '../../Components/ShippingComponents'
import { MapButton } from '../../Components/Buttons'
import { DataContext } from '../../Data/DataContext'
import { editAddresses } from '../../Data/DataActions'
import { LocationContext } from '../../Data/LocationContext'
import { HANDLE_ADDING_ADDRESS, HANDLE_DELETING_ADDRESS, HANDLE_UPDATING_ADDRESS } from '../../Data/Mutations'
import add from '../../Data/Icons/add.svg'
import prev from '../../Data/Icons/prev.svg'
import bin from '../../Data/Icons/bin.svg'
import edit from '../../Data/Icons/edit.svg'


const Shipping = ({ newAddress, setNewAddress, activeAddress, setActiveAddress }) => {

	const { marker, setMarker } = useContext(LocationContext)

	const { data, setData } = useContext(DataContext)
	const { email, name, addresses, phone } = data

	const [activeForm, setActiveForm] = useState(null)

	const handleKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 13) {
			e.preventDefault()
		}
	}

	const addressInput = useRef(null)
	const phoneInput = useRef(null)
	const saveButton = useRef(null)

	const handleKeyUp = (e) => {
		if (e.keyCode === 13) {
			switch (e.target.name) {
				case 'name':
					addressInput.current.focus()
					break
				case 'address':
					phoneInput.current.focus()
					break
				default:
					saveButton.current.click()
			}
		}
	}

	
	const [handleAddingAddress] = useMutation(HANDLE_ADDING_ADDRESS, {
		onCompleted({ handleAddingAddress }) {
			if (handleAddingAddress.result) {
				setData(editAddresses(handleAddingAddress.addresses))
				setNewAddress(false)
				setMarker({ lat: '', lng: '' })
			}
		}
	})

	// const handleAddingAddress = async () => {
		// const response = await fetch('http://localhost:8888/addaddress', {
		// 	method: 'put',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 		email,
		// 		name,
		// 		phone,
		// 		address: `lat:${marker.lat} lng:${marker.lng}`
		// 	})
		// })
		// const { result, newAddresses } = await response.json()
		// if (result.nModified) {
		// 	setData(editAddresses(newAddresses))
		// 	setNewAddress(false)
		// 	setMarker({ lat: '', lng: '' })
		// }
	// }

	const [handleDeletingAddress] = useMutation(HANDLE_DELETING_ADDRESS, {
		onCompleted({ handleDeletingAddress }) {
			if (handleDeletingAddress.result) {
				setData(editAddresses(handleDeletingAddress.addresses))
			}
		}
	})
	
	// const handleDeletingAddress = async (id) => {
		// const response = await fetch('http://localhost:8888/deleteaddress', {
		// 	method: 'delete',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 		email,
		// 		addressId: id
		// 	})
		// })
		// const { result, newAddresses } = await response.json()
		// if (result.nModified) {
		// 	setData(editAddresses(newAddresses))
		// }
	// }
	
	
	const [handleUpdatingAddress] = useMutation(HANDLE_UPDATING_ADDRESS, {
		onCompleted({ handleUpdatingAddress }) {
			if (handleUpdatingAddress.result) {
				setData(editAddresses(handleUpdatingAddress.addresses))
				setActiveForm(null)
			}
		}
	})
	
	return (
		<>
			<CheckoutTitle h1> Shipping </CheckoutTitle>
			{!newAddress ?
				<FlexContainer responsive>
					{addresses.map((a, i) => (
						<ShippingDetails
							key={i}
							onClick={() => setActiveAddress(a)}
							active={a === activeAddress}
						>
							<AddressActions>
								<img onClick={() => handleDeletingAddress({ variables: { email, addressId: a.id } })} src={bin} alt='bin' />
								<img onClick={() => setActiveForm(a.id)} src={edit} alt='edit' />
							</AddressActions>
							<Formik
								initialValues={{
									name: a.name,
									address: a.address,
									phone: a.phone
								}}
								validationSchema={Yup.object({
									name: Yup.string()
										.min(2, 'Too Short')
										.required("Can't Be Empty"),
									address: Yup.string()
										.required("Can't Be Empty"),
									phone: Yup.string()
										.matches(/^\d{11}$/, 'Invalid Phone')
										.required("Can't Be Empty"),
								})}
								onSubmit={async ({ name, address, phone }) => {
									handleUpdatingAddress({ variables: { addressId: a.id, name, phone, address }})
									// const response = await fetch('http://localhost:8888/updateaddress', {
									// 	method: 'put',
									// 	headers: { 'Content-Type': 'application/json' },
									// 	body: JSON.stringify({
									// 		addressId: a.id,
									// 		name,
									// 		address,
									// 		phone,
									// 	})
									// })
									// const { result, newAddresses } = await response.json()
									// if (result.nModified) {
									// 	setData(editAddresses(newAddresses))
									// 	setActiveForm(null)
									// }
								}}
							>
								{({ errors, touched }) => (
									<Form onKeyDown={handleKeyDown}>
										<h3> Address {i + 1} </h3>
										<div>
											<h4> Name </h4>
											{activeForm === a.id ?
												<>
													<Field name='name' onKeyUp={handleKeyUp} />
													{touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
												</>
												:
												<p><strong>{a.name}</strong></p>
											}
										</div>
										<div>
											<h4> Address </h4>
											{activeForm === a.id ?
												<>
													<Field name='address' innerRef={addressInput} onKeyUp={handleKeyUp} />
													{touched.address && errors.address && <ErrorText>{errors.address}</ErrorText>}
												</>
												:
												<p>{a.address}</p>
											}
										</div>
										<div>
											<h4> Phone </h4>
											{activeForm === a.id ?
												<>
													<Field name='phone' innerRef={phoneInput} onKeyUp={handleKeyUp} />
													{touched.phone && errors.phone && <ErrorText>{errors.phone}</ErrorText>}
												</>
												:
												<p>{a.phone}</p>
											}
										</div>
										{activeForm === a.id &&
											<FlexContainer around>
												<Button type='button' onClick={() => setActiveForm(false)}> Cancel </Button>
												<Button type='submit' ref={saveButton}> Save </Button>
											</FlexContainer>
										}
									</Form>
								)}
							</Formik>
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
						<h3>Back to Addresses </h3>
					</BackTitle>
					<GMap
						marker={marker}
						setMarker={setMarker}
					/>
					<MapButton grey onClick={() => handleAddingAddress({ variables: { email, name, phone, address: `lat:${marker.lat} lng:${marker.lng}` }})}>
						Confirm
					</MapButton>
				</>
			}
		</>
	)
}

export default Shipping