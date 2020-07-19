import React, {Fragment, useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import GMap from '../GMap/GMap'
import './Form.css'
import fb from '../Icons/facebook.svg'
import google from '../Icons/google.svg'


const Form =({name, address, onSignIn, setName, setAddress}) => {

	const [signUpData, setSignUpData] = useState({
		email:'',
		password:'',
		phone:'',
	})
	const {email, password, phone} = signUpData

	const [marker, setMarker] = useState({lat:'', lng:''})

	const handleNameChange=(e)=>{
		setName(e.target.value)
	}

	const handleEmailChange=(e)=>{
		setSignUpData({ ...signUpData, email:e.target.value})
	}

	const handlePasswordChange=(e)=>{
		setSignUpData({ ...signUpData, password:e.target.value})
	}

	const handlePhoneChange=(e)=>{
		setSignUpData({ ...signUpData, phone:e.target.value})
	}

	const handleAddressChange=(e)=>{
		setAddress(e.target.value)
	}

	const handleAddressConfirm=()=>{
		setDetectAddress(false)
		addressInput.current.value=`lat:${marker.lat}  lng:${marker.lng}`
		setAddress(`lat:${marker.lat}  lng:${marker.lng}`)
	}

	const [signInData, setSignInData ] = useState({
		signInEmail:'',
		signInPassword:''
	})
	const {signInEmail, signInPassword} = signInData

	const handleSignInEmailChange=(e)=>{
		setSignInData({ ...signInData, signInEmail:e.target.value})
	}

	const handleSignInPasswordChange=(e)=>{
		setSignInData({...signInData, signInPassword:e.target.value})
	}

	const emailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
	const phoneFormat = /^\d{11}$/
	const signUpFilled = name && email.match(emailFormat) && password  && phone.match(phoneFormat) && address
	const signInFilled = signInEmail.match(emailFormat)  && signInPassword

	const [valid, setValid] = useState({
		validEmail: true,
		validPhone: true
	})
	const {validEmail, validPhone} = valid

	const handleSubmitSignUp=()=>{
		if(signUpFilled){
			onSignIn()
		}else if (!email.match(emailFormat)){
			setValid({...valid,validEmail:false})
		}else if (!phone.match(phoneFormat)){
			setValid({...valid,validPhone:false})
		}
	}

	const handleSubmitSignIn =()=>{
		if(signInFilled){
			onSignIn()
		}else if(!signInEmail.match(emailFormat)){
			setValid({...valid, validEmail:false})
		}//else if (signInPassword.match(passwordFormat))
	}

	const [haveAccount, setHaveAccount] = useState(true)

	const [detectAddress, setDetectAddress] = useState(false)

	const nameInput = useRef(null)
	const emailInput = useRef(null)
	const passwordInput = useRef(null)
	const phoneInput = useRef(null)
	const addressInput = useRef(null)
	const signUpButton = useRef(null)

	const signInEmailInput = useRef(null)
	const signInPasswordInput = useRef(null)
	const signInButton = useRef(null)

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
					break
				default :
					signUpButton.current.click()
			}
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

			<div className={haveAccount?"allcontainer" : "allcontainer right-panel-active"}>
			
				<div className="form-container sign-up-container">
					<div  className='form'>
						<h1 className='header'>Create Account</h1>
						<input className='input' type="text" placeholder="Name" 
						 ref={nameInput} onKeyUp={handleKeyUp} onChange={handleNameChange} 
						/>
						<input className='input' type="email" placeholder="Email" id='sign-up-email'
						 ref={emailInput} onKeyUp={handleKeyUp} onChange={handleEmailChange} 
						/>
						<input className='input' type="password" placeholder="Password" id='sign-up-password'
						 ref={passwordInput} onKeyUp={handleKeyUp} onChange={handlePasswordChange} 
						/>
						<input className='input ' type="tel" placeholder="01234567890"
						 ref={phoneInput} onKeyUp={handleKeyUp} onChange={handlePhoneChange} 
						/>
						<textarea className='input' placeholder='Address' rows='2'
						 ref={addressInput} onChange={handleAddressChange} onKeyUp={handleKeyUp}
						/>
						<p className={(validEmail && validPhone )? 'valid hide':'valid'}>
						 Please Enter A Valid {!validPhone? 'Phone': 'Email'}
						</p>
						<button className='bt' onClick={()=>setDetectAddress(true)}>
						 Detect My Location 
						</button>
						<Link  to={signUpFilled? '' : 'signin'}>
							<button ref={signUpButton} className='bt' onClick={handleSubmitSignUp}>
							 Sign Up 
							</button>
						</Link>
					</div>
				</div>

				<div className="form-container sign-in-container">
					<div className='form'>
						<h1 className='header'>Sign In</h1>
						<div className="social-container">
							<a className="social" href='facebook'><img src={fb} alt='facebook'/></a>
							<a className="social" href='google'><img src={google} alt='google'/></a>
						</div>
						<span className='sub'>or use your account</span>
						<input className='input' type="email" placeholder="Email"
						 ref={signInEmailInput} onKeyUp={handleKeyUp} onChange={handleSignInEmailChange} 
						/>
						<input className='input' type="password" placeholder="Password" 
						 ref={signInPasswordInput} onKeyUp={handleKeyUp} onChange={handleSignInPasswordChange} 
						/>
						<a href='resetPassword'className='link'>Forgot your password?</a>
						<p className={validEmail ? 'valid hide': 'valid'}> Wrong Email or Password</p>
						<Link to={signInFilled? '' : 'signin'} >
							<button ref={signInButton} className='bt' onClick={handleSubmitSignIn}>
							 Sign In
							</button>						
						</Link>
					</div>
				</div>

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
		
		<div className={detectAddress? 'map-con' : 'map-con hide'}>
			<GMap 
			 setMarker={setMarker}
			 marker={marker}
			 />
			<button className='bt' style={{'background':'black'}} onClick={handleAddressConfirm}> 
			 Confirm
			</button>
		</div>
		</Fragment>
	)
	
}

export default Form