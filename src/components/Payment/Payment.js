import React, { Fragment, useState } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import money from '../Icons/cash.svg'
import greenMoney from '../Icons/cash-green.svg'
import credit from '../Icons/credit.svg'
import greenCredit from '../Icons/credit-green.svg'
import FlexContainer from '../StyledComponents/FlexContainer'
import { PaymentButton, CashPayment } from '../StyledComponents/PaymentComponents'
import Title from '../StyledComponents/Title'


const Payment = ({ cartItemsEntries, cartItems }) => {

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
						{cartItemsEntries.map(x =>
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
			</FlexContainer>
		</Fragment>
	)
}

export default Payment