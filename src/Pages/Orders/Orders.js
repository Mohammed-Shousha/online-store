import React, { useContext } from 'react'
import CartItem from '../../Containers/CartItem/CartItem'
import Title from '../../Components/Title'
import Icon from '../../Components/Icon'
import { LinkButton } from '../../Components/Buttons'
import FlexContainer from '../../Components/FlexContainer'
import { DataContext } from '../../Data/DataContext'
import box from '../../Data/Icons/box.svg'


const Orders = () => {

	const { data } = useContext(DataContext)
	const { cartItems, orders } = data

	return (
		<>
			<Title h1> Orders </Title>
			{!orders.length ?
				<div>
					<Icon src={box} alt='box' />
					<h1> You Don't Have Any Orders Yet</h1>
					{cartItems.every(item => item[1] === 0) ?
						<>
							<p> What are you waiting for ? </p>
							<LinkButton to='/'>
								Continue Shopping
							</LinkButton>
						</>
					:
						<>
							<p>But there is some items in your cart </p>
							<LinkButton to='/checkout'>
								Checkout Now
							</LinkButton>
						</>
					}
				</div>
				:
				<>
					{orders.map(({id, order, time}) => (
						<div  key={id}>
							<h2>Order Time: {time}</h2>
							{order.map(item =>
								<FlexContainer center>
									<CartItem
										key={item[0]}
										productId={item[0]}
										editable={false}
										order={order}
									/>
								</FlexContainer>
							)}
						</div>
					))}
				</>
			}
		</>
	)
}

export default Orders