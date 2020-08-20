import React, { useContext } from 'react'
import OrderSummary from '../../Containers/OrderSummary/OrderSummary'
import CartItem from '../../Containers/CartItem/CartItem'
import FlexContainer from '../../Components/FlexContainer'
import { LinkButton } from '../../Components/Buttons'
import { DoneContainer } from '../../Components/DoneComponents'
import Title from '../../Components/Title'
import { DataContext } from '../../Data/DataContext'


const Done = ({ activeAddress, cash })=>{

    const { data } = useContext(DataContext)
    const { name, orders } = data
    const { id, order } = orders[orders.length-1]
    const newName = name.split(' ')[0]

    return(
        <>
            <h1>Congratulations {newName}</h1>
            <h3> Your Order have been placed </h3>
            <Title h2>Order Details</Title>
            <Title onClick={()=>alert(id)}>Order ID: {id}</Title>
            <FlexContainer around noAlign responsive>
                <div>
                {order.map(item =>
                    <CartItem
                        key={item[0]}
                        productId={item[0]}
                        editable={false}
                    />
                )}
                </div>
                <OrderSummary
                    checkoutNow={false}
                />
            </FlexContainer>
                        <Title h2> Shipping Address</Title>
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
                    <div>
                        <Title h2> Payment Method</Title>
                        <DoneContainer>
                        {cash ? 
                            <h3> Cash on Delivery </h3>
                        :
                            <h3> Default Card Selected </h3>
                        }
                        </DoneContainer>
                    </div>
            <LinkButton to='/'>
                Continue Shopping
            </LinkButton>
        </>
    )
}

export default Done