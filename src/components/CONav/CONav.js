import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import back from '../Icons/prev.svg'
import check from '../Icons/check.svg'
import { STEPS } from '../Database'
import { Navbar } from '../StyledComponents/Navbar'
import Logo from '../StyledComponents/Logo'
import FlexContainer from '../StyledComponents/FlexContainer'
import { BackDiv, CheckoutStep, NumCircle } from '../StyledComponents/CheckoutComponents'

const CONav = ({ step, handleBack }) => (
	<Fragment>
		<Navbar>
			<Link to={step === 1 ? '/cart' : location => location} onClick={handleBack}>
				<BackDiv>
					<img src={back} alt='back' />
					<h3>{STEPS[step - 1].back}</h3>
				</BackDiv>
			</Link>
			<h3> Checkout </h3>
			<Logo />
		</Navbar>

		<FlexContainer around margin='1.5rem 0'>
			{STEPS.map(s => (
				<CheckoutStep key={s.id} active={s.id === step}>
					{s.id < step ?
						<img src={check} alt='check' />
						:
						<NumCircle active={s.id === step}> {s.id} </NumCircle>
					}
					{s.name}
				</CheckoutStep>
			))}
		</FlexContainer>
	</Fragment>
)


export default CONav