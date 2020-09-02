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
	const { cartItems } = data

	const [step, setStep] = useState(1)
	const [activeAddress, setActiveAddress] = useState(null)
	const [cash, setCash] = useState(true)
	
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

	const placeOrder = () => {
		handleNext()
		setData(editOrders(
			{id: orderId(), order: cartItems, time: orderTime()}
		))
	}

	const orderTime = () => {
		let date = new Date()
		let today = date.getDate() + '/'
			+ (date.getMonth() + 1) + '/'
			+ date.getFullYear()
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let ampm = hours >= 12 ? 'pm' : 'am'
		hours = hours % 12
		hours = hours ? hours : 12
		minutes = minutes < 10 ? '0' + minutes : minutes
		let now = hours + ':' + minutes + ' ' + ampm
		return today + ' ' + now
	}

	const orderId = ()=>{
		let date = new Date()
		let today = '' + date.getDate() + '' + (date.getMonth() + 1) + date.getFullYear()
		let now = '' + date.getHours() + '' + date.getMinutes() + date.getSeconds()
		return now + today
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