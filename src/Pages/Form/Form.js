import React from 'react'
import { useLocation } from 'react-router-dom'
import SignIn from '../../Containers/SignIn/SignIn'
import SignUp from '../../Containers/SignUp/SignUp'
import { LinkText, ParticlesBG } from '../../Components/FormComponents'
import back from '../../Data/Icons/prev.svg'

const Form = () => {

	let location = useLocation()

	return (
		<>
			<LinkText to='/'>
				<img src={back} alt='back' />
				<h2> Home </h2>
			</LinkText>
			<ParticlesBG />
			{location.pathname === '/signin' ?
				<SignIn />
			:
				<SignUp />
			}
		</>
	)
}

export default Form