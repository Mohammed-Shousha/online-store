import React from 'react'
import { Link } from 'react-router-dom'
import Alert from '../StyledComponents/Alert'
import x from '../Icons/x.svg'


const SignInFirst = ({ setAlert }) => (
	<Alert>
		<img src={x} alt='x' onClick={() => setAlert(false)} />
		<p>In Order to Add Items to Your Cart <br />
			<Link to='/signin'>
				<strong>SignIn or SignUp</strong>
			</Link>
		</p>
	</Alert>
)

export default SignInFirst