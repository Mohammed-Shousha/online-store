import React, {Fragment ,useContext} from 'react'
import CartItem from '../../components/CartItem/CartItem'
import {DataContext} from '../../context/DataContext'
import box from '../../components/Icons/box.svg'
import Title from '../../components/StyledComponents/Title'
import Icon from '../../components/StyledComponents/Icon'
import LinkButton from '../../components/StyledComponents/LinkButton'


const Orders =()=>{

	const {data} = useContext(DataContext)
	const {cartItems, orders} = data

	return(
		<Fragment>
		<Title> Orders </Title>
		{!orders.length?
			<div>
				<Icon src={box} alt='box'/>
				<h1> You Don't Have Any Orders Yet</h1>
				{cartItems.every(x => x===0) ?
					<Fragment>
					<p> What are you waiting for ? </p> 
					<LinkButton to='/'>
						Continue Shopping
					</LinkButton>
					</Fragment>
				:
					<Fragment>
					<p>But there is some items in your cart </p>
					<LinkButton to='/checkout'>
						Checkout Now
					</LinkButton>
					</Fragment>
				}
			</div>
		:
			<div>
				{orders.map((order, i)=>(
					<Fragment key={i}>
					<h2>Order Time: {order[2]}</h2>
					{order[0].map(x=>
						<CartItem 
						 key={x[0]} productId={x[0]} 
					 	 editable={false}
					 	 cartItems={order[1]}
						 />)}
					</Fragment>
				))}
			</div>
		}
		</Fragment>
	)
}

export default Orders