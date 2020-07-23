import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import './Checkout.css'
import CONav from '../../components/CONav/CONav'
import Shipping from '../../components/Shipping/Shipping'
import CartItem from '../../components/CartItem/CartItem'
import Footer from '../../components/Footer/Footer'


const Checkout = ({signUpData,setSignUpData, marker, setMarker, cartItems, orders, setOrders})=>{

	const [step, setStep] = useState(1)

	const handleNext =()=>{
		setStep(step+1)
	}

	const handleBack =()=>{
		setStep(step-1)
	}

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

	const placeOrder =()=>{
		handleNext()
		setOrders([...orders, [cartItemsEntries, cartItems, orderTime()]])
		console.log(orders)
	}

	const cartItemsEntries = Object.entries(cartItems).filter(x=> x[1] > 0)

	const [newAddress, setNewAddress]= useState(false)

	return (
		<Fragment>
			<CONav step={step} handleBack={handleBack}/>
			{step===1?
				<Fragment> 
				<Shipping 
				 signUpData={signUpData}
				 setSignUpData={setSignUpData}
				 marker={marker}
			     setMarker={setMarker}
			     newAddress={newAddress}
			     setNewAddress={setNewAddress}
				/>

				<button 
				 className={newAddress? 'hide checkout-continue':'checkout-continue'}
				 onClick={handleNext}
				>
					Continue 
				</button>
				</Fragment>
			:step===2?
				<Fragment> 
				<div>
				{cartItemsEntries.map(x=> 
					<CartItem key={x[0]} productId={x[0]} 
					 editable={false}
					 cartItems={cartItems}
					/>
				)}
				</div>
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