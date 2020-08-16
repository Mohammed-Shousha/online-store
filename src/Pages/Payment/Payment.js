import React, { Fragment, useState } from 'react'
import CartItem from '../../Containers/CartItem/CartItem'
import OrderSummary from '../../Containers/OrderSummary/OrderSummary'
import Title from '../../Components/Title'
import FlexContainer from '../../Components/FlexContainer'
import { PaymentButton, CashPayment } from '../../Components/PaymentComponents'
import money from '../../Data/Icons/cash.svg'
import greenMoney from '../../Data/Icons/cash-green.svg'
import credit from '../../Data/Icons/credit.svg'
import greenCredit from '../../Data/Icons/credit-green.svg'


const Payment = ({ cartItems }) => {

	const [cash, setCash] = useState(true)

	return (
		<Fragment>
			<Title h2> Payment</Title>
			<FlexContainer around responsive>
				<div>
					<Fragment>
						<Title h3> Payment Method </Title>
						<FlexContainer center>
							<PaymentButton
								active={!cash}
								onClick={() => setCash(false)}
							>
								<img src={cash ? credit : greenCredit} alt='credit' />
								Pay with Card
							</PaymentButton>

							<PaymentButton
								active={cash}
								onClick={() => setCash(true)}
							>
								<img src={cash ? greenMoney : money} alt='money' />
								Pay with Cash
							</PaymentButton>
						</FlexContainer>
						<FlexContainer center>
							{cash ?
								<CashPayment>
									<p>Please note there is a non-refundable fee of 10.00 EGP for our cash on delivery service. </p>
									<p>To save on this amount,&nbsp;
								<strong onClick={() => setCash(false)}>
											please proceed with debit/credit card.
								</strong>
									</p>
								</CashPayment>
								:
								<CashPayment>
									<p> To Be Card Payment // Stripe </p>
								</CashPayment>
							}
						</FlexContainer>
					</Fragment>
					<div>
						<Title h3> Your Order </Title>
						{cartItems.map(item =>
							<CartItem 
								key={item[0]} 
								productId={item[0]}
								editable={false}
							/>
						)}
					</div>
				</div>
				<OrderSummary
					checkoutNow={false}
				/>
			</FlexContainer>
		</Fragment>
	)
}

export default Payment