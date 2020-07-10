import React from 'react';
import {Link} from 'react-router-dom';
import './Form.css';
import fb from '../Icons/facebook.svg';
import google from '../Icons/google.svg';

const emailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
const phoneFormat = /^\d{11}$/


class Form extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			haveAccount:true,
			validEmail:true,
			validPhone:true,
			email :'',
			phone:'',
			password:'',
			signInEmail :'',
			signInPassword:'',
		}
	}

	handleNameChange=(e)=>{
		this.props.onNameChange(e);
	}

	onEmailChange=(e)=>{
		this.setState({email:e.target.value})
	}

	onPasswordChange=(e)=>{
		this.setState({password:e.target.value})
	}

	onPhoneChange=(e)=>{
		this.setState({phone:e.target.value})
	}

	onSignInEmailChange=(e)=>{
		this.setState({signInEmail:e.target.value})
	}

	onSignInPasswordChange=(e)=>{
		this.setState({signInPassword:e.target.value})
	}

	onSubmitSignUp=()=>{
		const {haveAccount, email, password, phone} = this.state
		const signUpFilled = this.props.name && email.match(emailFormat) && password  && phone.match(phoneFormat)

		if(signUpFilled){
			this.props.onSignIn()
		}else if (!email.match(emailFormat)){
			this.setState({validEmail:false})
		}else if (!phone.match(phoneFormat)){
			this.setState({validPhone:false})
		}
	}

	onSubmitSignIn =()=>{
		const {signInEmail, signInPassword} = this.state
		const signInFilled = signInEmail.match(emailFormat)  && signInPassword

		if(signInFilled){
			this.props.onSignIn()
		}else if(!signInEmail.match(emailFormat)){
			this.setState({validEmail:false})
		}//else if (signInPassword.match(passwordFormat))
	}


	render(){

		const {haveAccount, email, password, phone, validEmail, validPhone, signInEmail, signInPassword} = this.state
		const signUpFilled = this.props.name && email.match(emailFormat) && password  && phone.match(phoneFormat)
		const signInFilled = signInEmail.match(emailFormat)  && signInPassword
		
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
							<input className='input' type="text" placeholder="Name" onChange={this.handleNameChange} required />
							<input className='input'type="email" placeholder="Email" onChange={this.onEmailChange} required/>
							<input className='input' type="password" placeholder="Password" onChange={this.onPasswordChange} required/>
							<input className='input' type="tel" placeholder="01234567890" onChange={this.onPhoneChange} required />
							<p className={(validEmail && validPhone )? 'valid hide':'valid'}>
							 Please Enter A Valid {!validPhone? 'Phone': 'Email'}
							 </p>
							<Link onClick={this.onSubmitSignUp} to={signUpFilled? '' : 'signin'}>
								<button className='bt'>
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
							<input className='input' type="email" placeholder="Email" onChange={this.onSignInEmailChange} required/>
							<input className='input' type="password" placeholder="Password" onChange={this.onSignInPasswordChange} required/>
							<a href='resetPassword'className='link'>Forgot your password?</a>
							<p className={validEmail ? 'valid hide': 'valid'}> Wrong Email or Password</p>
							<Link onClick={this.onSubmitSignIn} to={signInFilled? '' : 'signin'} >
								<button className='bt'> Sign In </button>						
							</Link>
						</form>
					</div>

					<div className="overlay-container">
						<div className="overlay">

							<div className="overlay-panel overlay-left">
								<h1 className='header'>Welcome Back!</h1>
								<p className='p'>To keep connected with us please login with your personal info</p>
								<button className="bt ghost" onClick={()=>this.setState({haveAccount:true})}>Sign In</button>
							</div>

							<div className="overlay-panel overlay-right">
								<h1 className='header'>Hello, Friend!</h1>
								<p className='p'>Enter your personal details and start journey with us</p>
								<button className=" bt ghost" onClick={()=>this.setState({haveAccount:false})}>Sign Up</button>
							</div>

						</div>
					</div>

				</div>

			</div>
		)
	}
}

export default Form;