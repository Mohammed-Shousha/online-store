import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SignIn from '../../Containers/SignIn/SignIn'
import SignUp from '../../Containers/SignUp/SignUp'
import { LinkText, ParticlesBG } from '../../Components/FormComponents'
import back from '../../Data/Icons/prev.svg'
import next from '../../Data/Icons/next.svg'

const Form = () => {

	let location = useLocation()
	const { i18n, t } = useTranslation()

	return (
		<>
			<LinkText to='/'>
				<img src={i18n.language === 'ar' ? next: back} alt='back' />
				<h2> {t('Form.Home')} </h2>
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