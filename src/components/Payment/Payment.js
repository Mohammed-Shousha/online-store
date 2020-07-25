import React, {Fragment, useState} from 'react'
import './Payment.css'
import CartItem from '../../components/CartItem/CartItem'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import money from '../Icons/cash.svg'
import greenMoney from '../Icons/cash-green.svg'
import credit from '../Icons/credit.svg'
import greenCredit from '../Icons/credit-green.svg'


const Payment =({cartItemsEntries, cartItems})=> {

	const [cash, setCash] = useState(true)

	return(
		<Fragment>
		<h2 className='payment-text'> Payment</h2>
		<div className='payment-container'>
			<div>
				<Fragment>
				<h3 className='payment-text'> Payment Method </h3>
				<div className='flex justify-center'>
					<button 
					 className={`payment-method-button ${cash? '' : 'active-button'}`}
					 onClick={()=> setCash(false)}
					> 
						<img src={cash? credit: greenCredit} alt='credit' className='payment-img'/>
						Pay with Card
					</button>

					<button 
					 className={`payment-method-button ${cash? 'active-button' : ''}`}
					 onClick={()=> setCash(true)}
					>
						<img src={cash? greenMoney: money} alt='money' className='payment-img'/>
						Pay with Cash
					</button>
				</div>
				<div className='flex justify-center'>
					{cash? 
						<div className='cash-payment'>
							<p>Please note there is a non-refundable fee of 10.00 EGP for our cash on delivery service. </p>
							<p>To save on this amount,&nbsp; 
								<strong 
								 className='pointer'
								 onClick={()=> setCash(false)}
								>
									please proceed with debit/credit card.
								</strong>
							</p>
						</div>
					: 
						<div>
							<p> To Be Card Payment // Stripe </p>
						</div>
					}
				</div>
				</Fragment>
				<div>
					<h3 className='payment-text'> Your Order </h3>
					{cartItemsEntries.map(x=> 
						<CartItem key={x[0]} productId={x[0]} 
						 editable={false}
						 cartItems={cartItems}
						/>
					)}
				</div>
			</div>
			<OrderSummary
			 cartItemsEntries={cartItemsEntries}
			 checkoutNow={false}
			/>
		</div>
		</Fragment>
	)
}

export default Payment