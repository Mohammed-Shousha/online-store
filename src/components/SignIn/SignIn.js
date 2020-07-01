import React from 'react';
import './SignIn.css'

class SignIn extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			haveAccount:true,
		}
	}

		
	render(){
		const {haveAccount} = this.state
		const {onRouteChange} = this.props

		return(
			<div className='body'>
				<div className={haveAccount?"allcontainer" : "allcontainer right-panel-active"}>
					<div className="form-container sign-up-container">
						<form  className='form'action="#">
							<h1 className='header'>Create Account</h1>
							
							<span className='sub'>or use your email for registration</span>
							<input className='input' type="text" placeholder="Name" />
							<input className='input'type="email" placeholder="Email" />
							<input className='input' type="password" placeholder="Password" />
							<button className='bt' onClick={()=>onRouteChange('home')}>Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form className='form' action="#">
							<h1 className='header'>Sign in</h1>
						
							<span className='sub'>or use your account</span>
							<input className='input' type="email" placeholder="Email" />
							<input className='input' type="password" placeholder="Password" />
							<a href='resetPassword'className='link'>Forgot your password?</a>
							<button className='bt' onClick={()=>onRouteChange('home')}>Sign In</button>
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

export default SignIn;