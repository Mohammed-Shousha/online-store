import React from 'react'
import {Link} from 'react-router-dom'
import './SignInFirst.css'
import x from '../Icons/x.svg'


const SignInFirst =({setAlert})=>(
	<div className='sign-in-first'>
		<img 
		 className='x'
		 src={x} alt='x'
		 onClick={()=>setAlert(false)}/>
		<p>In Order to Add Items to Your Cart <br/>
			<Link to='/signin'> 
				<strong>SignIn or SignUp</strong>
			</Link>
		</p>
	</div>

)

export default SignInFirst