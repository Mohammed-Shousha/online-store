import React, { Fragment, useContext, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import CONav from '../../components/CONav/CONav'
import Shipping from '../../components/Shipping/Shipping'
import Payment from '../../components/Payment/Payment'
import Footer from '../../components/Footer/Footer'
import { editOrders } from '../../context/DataActions'
import { LinkButton, Button } from '../../components/StyledComponents/Buttons'


const Checkout = () => {

	const { data, setData } = useContext(DataContext)
	const { cartItems } = data

	const cartItemsEntries = Object.entries(cartItems).filter(x => x[1] > 0)

	const [step, setStep] = useState(1)

	const handleNext = () => {
		setStep(step + 1)
	}

	const handleBack = () => {
		setStep(step - 1)
	}

	const placeOrder = () => {
		handleNext()
		setData(editOrders(
			[cartItemsEntries, cartItems, orderTime()]
		))
	}

	const [newAddress, setNewAddress] = useState(false)

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

	return (
		<Fragment>
			<CONav step={step} handleBack={handleBack} />
			{step === 1 ?
				<Fragment>
					<Shipping
						newAddress={newAddress}
						setNewAddress={setNewAddress}
					/>
					<Button onClick={handleNext} hide={newAddress}>
						Continue
					</Button>
				</Fragment>
			: step === 2 ?
				<Fragment>
					<Payment
						cartItems={cartItems}
						cartItemsEntries={cartItemsEntries}
					/>
					<Button onClick={placeOrder}>
						Place Order
					</Button>
				</Fragment>
			:
				<LinkButton to='/orders'>
					To Orders
				</LinkButton>
			}
			<Footer />
		</Fragment>
	)
}

export default Checkout