import React, { useContext } from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import PaymentForm from '../../Containers/PaymentForm/PaymentForm'
import CartItem from '../../Containers/CartItem/CartItem'
import OrderSummary from '../../Containers/OrderSummary/OrderSummary'
import { CheckoutTitle } from '../../Components/Title'
import FlexContainer from '../../Components/FlexContainer'
import { PaymentButton, PaymentContainer } from '../../Components/PaymentComponents'
import { DataContext } from '../../Data/DataContext'
import money from '../../Data/Icons/cash.svg'
import greenMoney from '../../Data/Icons/cash-green.svg'
import credit from '../../Data/Icons/credit.svg'
import greenCredit from '../../Data/Icons/credit-green.svg'


const promise = loadStripe("pk_test_51HVa76KSon2LsBHhXeMkqSJSSmE5ZDAejg6K0DmxFppRgFXJBeZcojemAUXZ2PrQvyRkynin3TS6GZ8iUCQJpiRu00IPu5tsoN")

const Payment = ({ cash, setCash }) => {

	const { data } = useContext(DataContext)
	const { cartItems } = data 

	return (
		<>
			<CheckoutTitle h1> Payment</CheckoutTitle>

			<CheckoutTitle h2> Payment Method </CheckoutTitle>
			<FlexContainer center>
				<PaymentButton
					active={!cash}
					onClick={() => setCash(false)}
				>
					<img src={cash ? credit : greenCredit} alt='credit' />
					<p> Pay with Card </p>
				</PaymentButton>

				<PaymentButton
					active={cash}
					onClick={() => setCash(true)}
				>
					<img src={cash ? greenMoney : money} alt='money' />
					<p> Pay with Cash </p>
				</PaymentButton>
			</FlexContainer>
			<FlexContainer center>
				{cash ?
					<PaymentContainer>
						<p>Please note there is a non-refundable fee of 10.00 EGP for our cash on delivery service. </p>
						<p>To save on this amount,&nbsp;
					<strong onClick={() => setCash(false)}>
								please proceed with debit/credit card.
					</strong>
						</p>
					</PaymentContainer>
					:
					<PaymentContainer>
						<Elements stripe={promise}>
							<PaymentForm />
						</Elements>
					</PaymentContainer>
				}
			</FlexContainer>
					
			<CheckoutTitle h2> Your Order </CheckoutTitle>
			<FlexContainer around responsive>
				<div>
					{cartItems.map(({productId}) =>
						<CartItem 
							key={productId} 
							productId={productId}
							editable={false}
							checkout={true}
						/>
					)}
				</div>
				<OrderSummary
					checkoutNow={false}
				/>
			</FlexContainer>
		</>
	)
}

export default Payment