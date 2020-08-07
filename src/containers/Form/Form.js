import React, {Fragment} from 'react'
import Particles from 'react-particles-js'
import {particles} from  '../../components/Database'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import { Link, useLocation } from 'react-router-dom'
import './Form.css'
import back from '../../components/Icons/prev.svg'

const Form =()=>{

	let location = useLocation()

	return(
		<Fragment>
		<Link to='/' className='back-to-home' >
			<img src={back} alt='back' />
			<h2> Home </h2>
		</Link>
		<Particles
			className='absolute top-0 left-0 w-100 h-100'
			params={particles} 
		/>
		{location.pathname === '/signin'?
			<SignIn/>
		:
			<SignUp/>
		}
		</Fragment>
	)
}

export default Form