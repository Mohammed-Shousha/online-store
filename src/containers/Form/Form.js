import React, { Fragment } from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import { useLocation } from 'react-router-dom'
import back from '../../components/Icons/prev.svg'
import { LinkText, ParticlesBG } from '../../components/StyledComponents/FormComponents'

const Form = () => {

	let location = useLocation()

	return (
		<Fragment>
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
		</Fragment>
	)
}

export default Form