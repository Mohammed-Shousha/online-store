import React, { useContext } from 'react'
import OrderSummary from '../../Containers/OrderSummary/OrderSummary'
import CartItem from '../../Containers/CartItem/CartItem'
import FlexContainer from '../../Components/FlexContainer'
import { LinkButton } from '../../Components/Buttons'
import { DoneContainer } from '../../Components/DoneComponents'
import { CheckoutTitle } from '../../Components/Title'
import { DataContext } from '../../Data/DataContext'


const Done = ({ activeAddress, cash })=>{

    const { data } = useContext(DataContext)
    const { name, orders } = data
    const { id, order } = orders[orders.length-1]
    const newName = name.split(' ')[0]

    return(
        <>
            <CheckoutTitle h1 center>Congratulations {newName}</CheckoutTitle>
            <CheckoutTitle h3 center> Your Order have been placed </CheckoutTitle>
            <CheckoutTitle h2>Order Details</CheckoutTitle>
            <CheckoutTitle h3 >Order ID: {id}</CheckoutTitle>
            <FlexContainer around noAlign responsive>
                <div>
                    {order.map(({productId}) =>
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

            <CheckoutTitle h2> Shipping Address</CheckoutTitle>
            <DoneContainer>
                <p>Name</p>
                <h4>{activeAddress.name}</h4>
                <hr/>
                <p>Address</p>
                <h4>{activeAddress.address}</h4>
                <hr />
                <p>Phone</p>
                <h4>{activeAddress.phone}</h4>
            </DoneContainer>

            <CheckoutTitle h2> Payment Method</CheckoutTitle>
            <DoneContainer>
            {cash ? 
                <h3> Cash on Delivery </h3>
            :
                <h3> Default Card Selected </h3>
            }
            </DoneContainer>
            
            <LinkButton to='/'>
                Continue Shopping
            </LinkButton>
        </>
    )
}

export default Done