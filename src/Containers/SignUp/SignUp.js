import React, { useState, useContext, useRef } from 'react'
import { Formik, Form, useFormikContext } from 'formik'
import * as Yup from 'yup'
import { useHistory, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FormButton } from '../../Components/Buttons'
import ErrorText from '../../Components/ErrorText'
import { FormMap, FormContainer, StyledField, VisibleDiv } from '../../Components/FormComponents'
import GMap from '../GMap/GMap'
import { DataContext } from '../../Data/DataContext'
import { editData, editAddresses } from '../../Data/DataActions'
import { LocationContext } from '../../Data/LocationContext'
import { passwordRegex } from '../../Data/Constants'


const SignUp = () => {
	
	const { setIsSignedIn, setData } = useContext(DataContext)
	const { marker, setMarker } = useContext(LocationContext)
	
	let history = useHistory()
	const { t } = useTranslation()
	
	const [detectAddress, setDetectAddress] = useState(false)
	const [addressFocused, setAddressFocused] = useState(false)
	const [usedEmail, setUsedEmail] = useState(false)


	const nameInput = useRef(null)
	const emailInput = useRef(null)
	const passwordInput = useRef(null)
	const phoneInput = useRef(null)
	const addressInput = useRef(null)
	const signUpButton = useRef(null)

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

	const telKeyUp = (e) => {
		if (e.keyCode === 9) {
			addressInput.current.focus()
			setAddressFocused(true)
			e.preventDefault()
		}
	}

	const handleKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 13) {
			e.preventDefault()
		}
	}

	const ConfirmButton = () => {

		const { setFieldValue } = useFormikContext()

		const addressConfirm = () => {
			setFieldValue('address', `lat:${marker.lat}  lng:${marker.lng}`)
			setDetectAddress(false)
			setMarker({ lat: '', lng: '' })
		}

		return (
			<FormButton grey onClick={addressConfirm}>
				{t('Form.Confirm')}
			</FormButton>
		)
	}

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
					phone: '',
					address: '',
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, t('Form.NameErr'))
						.required(t('Form.Required')),
					email: Yup.string()
						.email(t('Form.EmailErr'))
						.required(t('Form.Required')),
					password: Yup.string()
						.matches(passwordRegex, t('Form.PassErr'))
						.required(t('Form.Required')),
					phone: Yup.string()
						.matches(/^\d{11}$/, t('Form.PhoneErr'))
						.required(t('Form.Required')),
				})}
				onSubmit={ async ({ name, email, password, phone, address }) => {
					const response = await fetch('http://localhost:8888/signup', {
						method: 'post',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							name,
							email,
							password,
							phone,
							address
						})
					})
					const user = await response.json()
					if (user._id) {
						history.push('/')
						setIsSignedIn(true)
						const { name, email, password, phone, addresses } = user
						setData(editData(name, email, password, phone))
						setData(editAddresses(addresses))
					} else {
						setUsedEmail(true)
					}
				}}
			>
				{({ errors, touched, values, handleChange }) => (
					<>
						<VisibleDiv visible={!detectAddress}>
							<Form onKeyDown={handleKeyDown} >
								<FormContainer >
									<h1>{t('Form.Create Account')}</h1>
									<StyledField
										name="name" type="text"
										placeholder={t('Form.Name')} innerRef={nameInput} onKeyUp={handleKeyUp}
									/>
									{touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
									<StyledField
										name="email" type="Email"
										placeholder={t('Form.Email')} innerRef={emailInput} onKeyUp={handleKeyUp}
									/>
									{touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
									{usedEmail && <ErrorText>{t('Form.EmailErrDb')}</ErrorText>}
									<StyledField
										name="password" type="password"
										placeholder={t('Form.Password')} innerRef={passwordInput} onKeyUp={handleKeyUp}
									/>
									{touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
									<StyledField
										name="phone" type="tel"
										placeholder={t('Form.Phone')} innerRef={phoneInput} onKeyUp={handleKeyUp} onKeyDown={telKeyUp}
									/>
									{touched.phone && errors.phone && <ErrorText>{errors.phone}</ErrorText>}
									<StyledField
										name="address" type="text" as='textarea' value={values.address} onChange={handleChange}
										placeholder={t('Form.Address')} ref={addressInput} onKeyUp={handleKeyUp}
										onClick={() => setAddressFocused(true)}
									/>
									{addressFocused &&
										<FormButton type='button' grey onClick={() => setDetectAddress(true)}>
											{t('Form.Location')}
									</FormButton>
									}
									<FormButton ref={signUpButton}>
										{t('Form.Sign Up')}
								</FormButton>
									<p> {t('Form.Have Account')}
										<Link to='signin'> <strong> {t('Form.Sign In')} </strong> </Link>
									</p>
								</FormContainer>
							</Form>
						</VisibleDiv>

						<FormMap visible={detectAddress}>
							<GMap
								marker={marker}
								setMarker={setMarker}
							/>
							<ConfirmButton />
						</FormMap>
					</>
				)}
			</Formik>
		</>
	)
}

export default SignUp