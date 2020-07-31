import React, {Fragment,useContext, useState} from 'react'
import {CartItemsContext} from '../../context/CartItemsContext'
import {OrdersContext} from '../../context/OrdersContext'
import {Link} from 'react-router-dom'
import CONav from '../../components/CONav/CONav'
import Shipping from '../../components/Shipping/Shipping'
import Payment from '../../components/Payment/Payment'
import Footer from '../../components/Footer/Footer'
import './Checkout.css'


const Checkout = ()=>{

	const {orders, setOrders} = useContext(OrdersContext)
	const {cartItems} = useContext(CartItemsContext)

	const cartItemsEntries = Object.entries(cartItems).filter(x=> x[1] > 0)

	const [step, setStep] = useState(1)

	const handleNext =()=>{
		setStep(step+1)
	}

	const handleBack =()=>{
		setStep(step-1)
	}

	const placeOrder =()=>{
		handleNext()
		setOrders([...orders, [cartItemsEntries, cartItems, orderTime()]])
	}

	const [newAddress, setNewAddress]= useState(false)

	const orderTime =()=> {
		let date = new Date()
		let today = date.getDate() + '/'
		+ (date.getMonth()+1) + '/'
		+ date.getFullYear()
	  	let hours = date.getHours()
	  	let minutes = date.getMinutes()
	  	let ampm = hours >= 12 ? 'pm' : 'am'
	  	hours = hours % 12
	  	hours = hours ? hours : 12
	  	minutes = minutes < 10 ? '0'+minutes : minutes
	  	let now = hours + ':' + minutes + ' ' + ampm
	  	return today + ' '+  now
	}

	return (
		<Fragment>
			<CONav step={step} handleBack={handleBack}/>
			{step===1?
				<Fragment> 
				<Shipping 
			     newAddress={newAddress}
			     setNewAddress={setNewAddress}
				/>

				<button 
				 className={`checkout-continue ${newAddress? 'hide':''}`}
				 onClick={handleNext}
				>
					Continue 
				</button>
				</Fragment>
			:step===2?
				<Fragment> 
				<Payment
				 cartItems={cartItems}
				 cartItemsEntries={cartItemsEntries}
				/>
				<button
				 className='checkout-continue'
				 onClick={placeOrder}
				>
					Place Order
				</button>
				</Fragment>
			:
				<Link to='/orders'>
					<button className='checkout-continue'>
						To Order
					</button>
				</Link>
			}

			
			<Footer/>
		</Fragment>
	)
}

export default Checkout