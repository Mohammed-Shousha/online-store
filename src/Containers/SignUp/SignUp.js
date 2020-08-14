import React, { Fragment, useState, useContext, useRef } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useHistory, Link } from 'react-router-dom'
import { FormButton } from '../../Components/Buttons'
import ErrorText from '../../Components/ErrorText'
import { FormMap, FormContainer, StyledField, VisibleDiv } from '../../Components/FormComponents'
import GMap from '../GMap/GMap'
import { DataContext } from '../../Data/DataContext'
import { editData, editAddresses } from '../../Data/DataActions'
import { LocationContext } from '../../Data/LocationContext'
import { passwordRegex } from '../../Data/Constants'


const SignUp = () => {

	const { setIsSignedIn, data, setData } = useContext(DataContext)

	const { marker, setMarker } = useContext(LocationContext)

	let history = useHistory()

	const [detectAddress, setDetectAddress] = useState(false)
	const [addressFocused, setAddressFocused] = useState(false)


	const nameInput = useRef(null)
	const emailInput = useRef(null)
	const passwordInput = useRef(null)
	const phoneInput = useRef(null)
	const addressInput = useRef(null)
	const signUpButton = useRef(null)

	const handleAddressConfirm = () => {
		setDetectAddress(false)
		setData(editAddresses(
			[{
				name: nameInput.current.value,
				address: `lat:${marker.lat}  lng:${marker.lng}`,
				phone: phoneInput.current.value
			}]
		))
		addressInput.current.value = `lat:${marker.lat}  lng:${marker.lng}`
		setMarker({ lat: '', lng: '' })
	}

	const handleKeyUp = (e) => {
		if (e.keyCode === 13) {
			switch (e.target.type) {
				case 'text':
					emailInput.current.focus()
					break
				case 'email':
					passwordInput.current.focus()
					break
				case 'password':
					phoneInput.current.focus()
					break
				case 'tel':
					addressInput.current.focus()
					setAddressFocused(true)
					break
				default:
					signUpButton.current.click()
			}
		}
	}

	const handleKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 13) {
			e.preventDefault();
		}
	}

	return (
		<Fragment>
			<Formik
				initialValues={{
					name: '',
					signUpEmail: '',
					signUpPassword: '',
					phone: '',
					address: '',
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, 'Too Short')
						.required('Required'),
					signUpEmail: Yup.string()
						.email('Invalid Email')
						.required('Required'),
					signUpPassword: Yup.string()
						.matches(passwordRegex, 'Password must contain at least one letter, at least one number, and be longer than 8 charaters')
						.required('Required'),
					phone: Yup.string()
						.matches(/^\d{11}$/, 'Invalid Phone')
						.required('Required'),
				})}
				onSubmit={({ name, signUpEmail, signUpPassword, phone, address }) => {
					history.push('/')
					setIsSignedIn(true)
					setData(editData(name, signUpEmail, signUpPassword, phone))
					if (!data.addresses[0].address) {
						setData(editAddresses([{ name: name, address: address, phone: phone }]))
					}
				}}
			>
				{({ errors, touched }) => (
					<VisibleDiv visible={!detectAddress}>
						<Form onKeyDown={handleKeyDown} >
							<FormContainer >
								<h1>Create Account</h1>
								<StyledField
									name="name" type="text"
									placeholder="Name" innerRef={nameInput} onKeyUp={handleKeyUp}
								/>
								{touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
								<StyledField
									name="signUpEmail" type="Email" id='sign-up-email'
									placeholder="Email" innerRef={emailInput} onKeyUp={handleKeyUp}
								/>
								{touched.signUpEmail && errors.signUpEmail && <ErrorText>{errors.signUpEmail}</ErrorText>}
								<StyledField
									name="signUpPassword" type="password" id='sign-up-password'
									placeholder='Password' innerRef={passwordInput} onKeyUp={handleKeyUp}
								/>
								{touched.signUpPassword && errors.signUpPassword && <ErrorText>{errors.signUpPassword}</ErrorText>}
								<StyledField
									name="phone" type="tel"
									placeholder="Phone " innerRef={phoneInput} onKeyUp={handleKeyUp}
								/>
								{touched.phone && errors.phone && <ErrorText>{errors.phone}</ErrorText>}
								<StyledField
									name="address" type="text" as='textarea' value={undefined}
									placeholder="Address (Optional)" ref={addressInput} onKeyUp={handleKeyUp}
									onClick={() => setAddressFocused(true)}
								/>
								{addressFocused &&
									<FormButton type='button' grey onClick={() => setDetectAddress(true)}>
										Detect My Location
									</FormButton>
								}
								<FormButton ref={signUpButton}>
									Sign Up
								</FormButton>
								<p> Have Account?
									<Link to='signin'> <strong> Sign In </strong> </Link>
								</p>
							</FormContainer>
						</Form>
					</VisibleDiv>
				)}
			</Formik>

			<FormMap visible={detectAddress}>
				<GMap
					marker={marker}
					setMarker={setMarker}
				/>
				<FormButton grey onClick={handleAddressConfirm}>
					Confirm
				</FormButton>
			</FormMap>
		</Fragment>
	)
}

export default SignUp