import React, {Fragment, useState,useContext, useRef, useEffect} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'
import GMap from '../GMap/GMap'
import './Formik.css'
import {passwordRegex} from '../Constants'
import {USERS} from '../Database'
import {DataContext} from '../../context/DataContext'
import {LocationContext} from '../../context/LocationContext'

 
 const FormikForm = () => {

 	const {setIsSignedIn, data, setData} = useContext(DataContext)

 	const {marker, setMarker} = useContext(LocationContext)

 	const onSignIn =()=>{
 		setIsSignedIn(true)
 	}

 	let history = useHistory()

	const [haveAccount, setHaveAccount] = useState(true)
	const [detectAddress, setDetectAddress] = useState(false)
	const [addressFocused, setAddressFocused] = useState(false)


	const nameInput = useRef(null)
	const emailInput = useRef(null)
	const passwordInput = useRef(null)
	const phoneInput = useRef(null)
	const addressInput = useRef(null)
	const signUpButton = useRef(null)

	const signInEmailInput = useRef(null)
	const signInPasswordInput = useRef(null)
	const signInButton = useRef(null)

	const handleAddressConfirm=()=>{
		setDetectAddress(false)
		setData({type:'EDIT_ADDRESSES', payload:
			[{
				name:nameInput.current.value,
				address:`lat:${marker.lat}  lng:${marker.lng}`,
				phone:phoneInput.current.value
			}]
		})
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
					e.target.id === 'sign-up-email'?
						passwordInput.current.focus()
					: 	signInPasswordInput.current.focus()
					break
				case 'password':
					e.target.id ==='sign-up-password'?
						phoneInput.current.focus()
					:	signInButton.current.click()
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

  	useEffect(()=>{
  		haveAccount?
  		 	signInEmailInput.current.focus()
  		:	nameInput.current.focus()
  	},[haveAccount])

 	return(
	 	<Fragment>
		<div className='body'>
			<div className={`allcontainer ${haveAccount? '' : 'right-panel-active'}`}>
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
					onSignIn()
					if(!data.addresses[0].address){ 
						// setData({ ...data,
						// 	name: name,
						// 	email: signUpEmail,
						// 	password: signUpPassword,
						// 	phone:phone,
		 				// 	addresses:[{name:name, address:address, phone:phone}]
		 				// })
						 setData({type:'EDIT_DATA', payload:{
							name: name,
							email: signUpEmail,
							password: signUpPassword,
							phone:phone,
						 }})
						 setData({type:'EDIT_ADDRESSES', payload:
							[{name:name, address:address, phone:phone}]
						 })
					}else{
					 	// setData({...data,
						// 	name: name,
						// 	email: signUpEmail,
						// 	password: signUpPassword,
						// 	phone:phone,
						// })
						setData({type:'EDIT_DATA', payload:{
							name: name,
							email: signUpEmail,
							password: signUpPassword,
							phone:phone,
						 }})
					}
				 }}
				>
				{({errors, touched})=>(
					<Form onKeyDown={handleKeyDown}>
						<div className="form-container sign-up-container">
							<div  className='form'>
								<h1 className='header'>Create Account</h1>
						        <Field 
						         name="name" type="text" className='input'
						         placeholder="Name" innerRef={nameInput} onKeyUp={handleKeyUp}
						        />
						        <ErrorMessage name="name" />
						        <Field 
						         name="signUpEmail" type="Email" className='input' id='sign-up-email'
						         placeholder="Email" innerRef={emailInput} onKeyUp={handleKeyUp} 
						        />
						        {touched.signUpEmail && errors.signUpEmail && <p className='error'>{errors.signUpEmail}</p>}
						        <Field 
						         name="signUpPassword" type="password" className='input' id='sign-up-password'
						         placeholder='Password' innerRef={passwordInput} onKeyUp={handleKeyUp}
						        />
						        {touched.signUpPassword && errors.signUpPassword && <p className='error'>{errors.signUpPassword}</p>}
						        <Field 
						         name="phone" type="tel" className='input'
						         placeholder="01234567890" innerRef={phoneInput} onKeyUp={handleKeyUp}
						        />
						        {touched.phone && errors.phone && <p className='error'>{errors.phone}</p>}
						        <Field 
						         name="address" type="text" className='input' as='textarea' value={undefined}
						         placeholder="Address (Optional)" innerRef={addressInput} onKeyUp={handleKeyUp}
						         onClick={()=> setAddressFocused(true)}
						        />
						        {addressFocused && <button 
						         type='button' className='bt' 
						         style={{'background':'#342b38', 'border':'none'}} 
						         onClick={()=>setDetectAddress(true)}
						        >
									Detect My Location 
								</button> }
						     	<button type='submit'  className='bt' ref={signUpButton}>
						     		Sign Up
						     	</button>
							</div>	
						</div>
					</Form>
				)}
				</Formik>

				<Formik
				 initialValues={{ 
					signInEmail: '',
					signInPassword:'', 
				 }}
				 validationSchema={Yup.object({
			        signInEmail: Yup.string()
			           .required('Required')
					   .test('match', 'Wrong Email', (signInEmail)=>(USERS.some(user=> user.email===signInEmail))),
			        signInPassword: Yup.string()
			        	.required('Required')
						.test('match', 'Wrong Password', (signInPassword)=>(USERS.some(user=> user.password===signInPassword))),
			     })}
				 onSubmit={(data) => {
					onSignIn()
					history.push('/')
					const {name, email, password, phone, addresses} =USERS.find(user => user.email===data.signInEmail)
					setData({type:'EDIT_DATA', payload:{
						name:name,
						email:email,
						password:password,
						phone:phone, 
						addresses:addresses
					}})
				 }}
				>
				{({errors, touched})=>(
					<Form onKeyDown={handleKeyDown}>
						<div className="form-container sign-in-container">
							<div className='form'>
								<h1 className='header'>Sign In</h1>
								<Field 
								 name='signInEmail' className='input' type="email"
								 placeholder="Email" innerRef={signInEmailInput} onKeyUp={handleKeyUp}
								/>
						        {touched.signInEmail && errors.signInEmail && <p className='error'>{errors.signInEmail}</p>}
								<Field 
								 name='signInPassword' className='input' type="password"
								 placeholder="Password" innerRef={signInPasswordInput} onKeyUp={handleKeyUp}
								/>
						        {touched.signInPassword && errors.signInPassword && <p className='error'>{errors.signInPassword}</p>}
								<button type='submit' className='bt' ref={signInButton}>
									Sign In 
								</button>	
							</div>	
						</div>
					</Form>
					)}
				</Formik>	

				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1 className='header'>Welcome Back!</h1>
							<p className='p'>To keep connected with us please login with your personal info</p>
							<button className="bt ghost" onClick={()=> setHaveAccount(true)}>Sign In</button>
						</div>

						<div className="overlay-panel overlay-right">
							<h1 className='header'>Hello, Friend!</h1>
							<p className='p'>Enter your personal details and start journey with us</p>
							<button className=" bt ghost" onClick={()=> setHaveAccount(false)}>Sign Up</button>
						</div>
					</div>
				</div>
			</div>	
		</div>

		<div className={`map-con ${detectAddress? '' : 'hide'}`}>
			<GMap 
			 marker={marker}
			 setMarker={setMarker}
			/>
			<button 
			 className='bt' 
			 style={{'background':'#342b38', 'border':'none'}}
			 onClick={handleAddressConfirm}
			> 
				Confirm
			</button>
		</div>
		</Fragment>
	)
}

export default FormikForm