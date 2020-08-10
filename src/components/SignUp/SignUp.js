import React, {Fragment, useState,useContext, useRef} from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useHistory, Link} from 'react-router-dom'
import GMap from '../GMap/GMap'
import {passwordRegex} from '../Constants'
import {DataContext} from '../../context/DataContext'
import {editData, editAddresses} from '../../context/DataActions'
import {LocationContext} from '../../context/LocationContext'
import FormButton from '../StyledComponents/FormButton'
import FormContainer from '../StyledComponents/FormContainer'
import StyledField from '../StyledComponents/StyledField'

 
 const SignUp = () => {

 	const {setIsSignedIn, data, setData} = useContext(DataContext)

 	const {marker, setMarker} = useContext(LocationContext)

 	let history = useHistory()

	const [detectAddress, setDetectAddress] = useState(false)
	const [addressFocused, setAddressFocused] = useState(false)


	const nameInput = useRef(null)
	const emailInput = useRef(null)
	const passwordInput = useRef(null)
	const phoneInput = useRef(null)
	const addressInput = useRef(null)
	const signUpButton = useRef(null)

	const handleAddressConfirm=()=>{
		setDetectAddress(false)
		setData(editAddresses(
			[{
				name:nameInput.current.value,
				address:`lat:${marker.lat}  lng:${marker.lng}`,
				phone:phoneInput.current.value
			}]
		))
		addressInput.current.value =`lat:${marker.lat}  lng:${marker.lng}`
		setMarker({lat:'',lng:''})
	}

	const handleKeyUp =(e)=> {
		if(e.keyCode === 13){
			switch(e.target.type){
				case 'text' :
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

  	const handleKeyDown =(e)=> {
	  if ((e.charCode || e.keyCode) === 13) {
	    e.preventDefault();
	  }
	}

 	return(
	 	<Fragment>	
		<Formik
			initialValues={{ 
			name: '',
			signUpEmail: '',
			signUpPassword:'',
			phone:'',
			address:'', 
			}}
			validationSchema={Yup.object({
			name: Yup.string()
				.required(<p className='error'>Required</p>),
			signUpEmail: Yup.string()
				.email('Invalid Email')
				.required('Required'),
			signUpPassword: Yup.string()
				.matches(passwordRegex,'Password must contain at least one letter, at least one number, and be longer than 8 charaters')
				.required('Required'),
			phone : Yup.string()
				.matches(/^\d{11}$/,'Invalid Phone')
				.required('Required'),
			})}
			onSubmit={({name, signUpEmail, signUpPassword, phone, address}) => {
			history.push('/')
			setIsSignedIn(true)
			setData(editData(name, signUpEmail, signUpPassword, phone))
			if(!data.addresses[0].address){ 
				setData(editAddresses([{name:name, address:address, phone:phone}]))
			}
			}}
		>
		{({errors, touched})=>(
			<Form onKeyDown={handleKeyDown}>
				<div className={detectAddress? 'hide' :''}>
				<FormContainer >
					<h1 className='header'>Create Account</h1>
					<StyledField 
						name="name" type="text"
						placeholder="Name" innerRef={nameInput} onKeyUp={handleKeyUp}
					/>
					<ErrorMessage name="name" />
					<StyledField 
						name="signUpEmail" type="Email" id='sign-up-email'
						placeholder="Email" innerRef={emailInput} onKeyUp={handleKeyUp} 
					/>
					{touched.signUpEmail && errors.signUpEmail && <p className='error'>{errors.signUpEmail}</p>}
					<StyledField 
						name="signUpPassword" type="password" id='sign-up-password'
						placeholder='Password' innerRef={passwordInput} onKeyUp={handleKeyUp}
					/>
					{touched.signUpPassword && errors.signUpPassword && <p className='error'>{errors.signUpPassword}</p>}
					<StyledField 
						name="phone" type="tel"
						placeholder="01234567890" innerRef={phoneInput} onKeyUp={handleKeyUp}
					/>
					{touched.phone && errors.phone && <p className='error'>{errors.phone}</p>}
					<StyledField 
						name="address" type="text" as='textarea' value={undefined}
						placeholder="Address (Optional)" ref={addressInput} onKeyUp={handleKeyUp}
						onClick={()=> setAddressFocused(true)}
					/>
					{addressFocused && 
					<FormButton 
						type='FormButton'
						grey
						onClick={()=>setDetectAddress(true)}
					>
						Detect My Location 
					</FormButton> }
					<FormButton  ref={signUpButton}>
						Sign Up
					</FormButton>
					<p> Have Account?
						<Link to='signin' className='link'> Sign In </Link>
					</p>
				</FormContainer>	
				</div>	
			</Form>
		)}
		</Formik>

		<div className={`map-con ${detectAddress? '' : 'hide'}`}>
			<GMap 
			 marker={marker}
			 setMarker={setMarker}
			/>
			<FormButton grey onClick={handleAddressConfirm}> 
				Confirm
			</FormButton>
		</div>
		</Fragment>
	)
}

export default SignUp