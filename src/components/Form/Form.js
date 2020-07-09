import React from 'react';
import {Link} from 'react-router-dom';
import './Form.css';
import fb from '../Icons/facebook.svg';
import google from '../Icons/google.svg';

const emailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/


class Form extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			haveAccount:true,
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


	render(){

		const {haveAccount, email, password, phone} = this.state
		const signUpFilled = this.props.name && email.match(emailFormat) && password  && phone.match(/^\d{11}$/)
		const {signInEmail, signInPassword} = this.state
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
							<Link onClick={this.props.onSignIn} to={signUpFilled? '' : 'signin'}>
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
							<Link onClick={this.props.onSignIn} to={signInFilled? '' : 'signin'} >
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