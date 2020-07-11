import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Form.css'
import fb from '../Icons/facebook.svg'
import google from '../Icons/google.svg'


const Form =({name, onSignIn, onNameChange}) => {

	const [signUpData, setSignUpData] = useState({
		email:'',
		password:'',
		phone:''
	})
	const {email, password, phone} = signUpData

	const handleNameChange=(e)=>{
		onNameChange(e)
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
	const signUpFilled = name && email.match(emailFormat) && password  && phone.match(phoneFormat)
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


	return(
		<div className='body'>

			<div className={haveAccount?"allcontainer" : "allcontainer right-panel-active"}>
			
				<div className="form-container sign-up-container">
					<form  className='form'>
						<h1 className='header'>Create Account</h1>
						<div className="social-container">
							<a className="social" href='facebook'><img src={fb} alt='facebook'/></a>
							<a className="social" href='google'><img src={google} alt='google'/></a>
						</div>
						<span className='sub'>or use your email for registration</span>
						<input className='input' type="text" placeholder="Name" onChange={handleNameChange} required />
						<input className='input'type="email" placeholder="Email" onChange={handleEmailChange} required/>
						<input className='input' type="password" placeholder="Password" onChange={handlePasswordChange} required/>
						<input className='input' type="tel" placeholder="01234567890" onChange={handlePhoneChange} required />
						<p className={(validEmail && validPhone )? 'valid hide':'valid'}>
						 Please Enter A Valid {!validPhone? 'Phone': 'Email'}
						 </p>
						<Link onClick={handleSubmitSignUp} to={signUpFilled? '' : 'signin'}>
							<button className='bt' onClick={()=> console.log(signUpData)} >
							 Sign Up 
							</button>
						</Link>
					</form>
				</div>

				<div className="form-container sign-in-container">
					<form className='form'>
						<h1 className='header'>Sign In</h1>
						<div className="social-container">
							<a className="social" href='facebook'><img src={fb} alt='facebook'/></a>
							<a className="social" href='google'><img src={google} alt='google'/></a>
						</div>
						<span className='sub'>or use your account</span>
						<input className='input' type="email" placeholder="Email" onChange={handleSignInEmailChange} required/>
						<input className='input' type="password" placeholder="Password" onChange={handleSignInPasswordChange} required/>
						<a href='resetPassword'className='link'>Forgot your password?</a>
						<p className={validEmail ? 'valid hide': 'valid'}> Wrong Email or Password</p>
						<Link onClick={handleSubmitSignIn} to={signInFilled? '' : 'signin'} >
							<button className='bt'> Sign In </button>						
						</Link>
					</form>
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
	)
	
}

export default Form