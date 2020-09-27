 import React, { useContext, useState } from 'react'
import CONav from '../../Containers/CONav/CONav'
import Shipping from '../Shipping/Shipping'
import Payment from '../Payment/Payment'
import Done from '../Done/Done'
import Footer from '../../Containers/Footer/Footer'
import { Button } from '../../Components/Buttons'
import Alert from '../../Components/Alert'
import { editOrders } from '../../Data/DataActions'
import { DataContext } from '../../Data/DataContext'


const Checkout = () => {

	const { data, setData } = useContext(DataContext)
	const { email } = data

	const [step, setStep] = useState(2)
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

	const placeOrder = async () => {
		const response = await fetch('http://localhost:8888/addorder', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email
			})
		})
		const { result, orders } = await response.json()
		if (result.nModified) {
			setData(editOrders(orders))
			handleNext()
		}
	}

	return (
		<>
			<CONav
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
					/>
					<Button onClick={placeOrder}>
						Place Order
					</Button>
				</>
			:
				<Done
					activeAddress={activeAddress}
					cash ={cash}
				/>
			}
			{alert &&<Alert setAlert={setAlert} checkout/>}
			<Footer />
		</>
	)
}

export default Checkout