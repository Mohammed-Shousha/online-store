 import React, { useState } from 'react'
import CheckoutNav from '../../Containers/CheckoutNav/CheckoutNav'
import Shipping from '../Shipping/Shipping'
import Payment from '../Payment/Payment'
import Done from '../Done/Done'
import { Button } from '../../Components/Buttons'
import Alert from '../../Components/Alert'


const Checkout = () => {

	const [step, setStep] = useState(1)
	const [activeAddress, setActiveAddress] = useState(null)
	const [cash, setCash] = useState(false)
	
	const [newAddress, setNewAddress] = useState(false)
	const [alert, setAlert] = useState(false)

	const handleNext = () => {
		if(activeAddress){
			setStep(step + 1)
		}
		else{
			setAlert(true)
		}
	}

	const handleBack = () => {
		setStep(step - 1)
	}

	return (
		<>
			<CheckoutNav
				step={step}
			 	handleBack={handleBack} 
			/>
			{step === 1 ?
				<>
					<Shipping
						activeAddress={activeAddress}
						setActiveAddress={setActiveAddress}
						newAddress={newAddress}
						setNewAddress={setNewAddress}
					/>
					<Button onClick={handleNext} hide={newAddress}>
						Continue
					</Button>
				</>
			: step === 2 ?
				<>
					<Payment
						cash={cash}
						setCash={setCash}
						handleNext={handleNext}
					/>
				</>
			:
				<Done
					activeAddress={activeAddress}
					cash ={cash}
				/>
			}
			{alert &&<Alert setAlert={setAlert} address/>}
		</>
	)
}

export default Checkout