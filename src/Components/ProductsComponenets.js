import styled from 'styled-components'
import React, { useContext, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { DataContext } from '../Data/DataContext'
import { editCartItems } from '../Data/DataActions'
import { device } from '../Data/Constants'


export const ProductsTitle = styled.h2`
    width: 90vw;
    font-size: 1.25em;
	margin: 3.75em auto 0;
	text-align: ${props => props.align};
	color: rgba(0,0,0,0.8);
	border-bottom: 0.1rem solid rgba(0,0,0,0.8);

    @media ${device.tablet}{
        font-size: 1.35em;
    }

    @media ${device.laptop}{
        font-size: 1.4em;
        margin: 1.5em auto 0;
    }

    @media ${device.laptopL}{
        font-size: 1.5em;
    }
`

export const ProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 84em){
        flex-direction: row;
    }

    > div{
        display: flex;
        justify-content: center;
        flex-direction: column;

        @media (min-width: 37.5em){
            flex-direction: row;
        }
    }
`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
`

export const AddToCartButton = styled.button`
    width: 250px;
	height: 40px;
	background-color:${props => props.disabled ? "white" : "rgba(44, 62, 80, .75)"} ;
	color: ${props => props.disabled ? "rgba(44, 62, 80, .75)" : "white"};
	border: 0;
	border-radius: 0.25rem;
	padding: 5px 0 0 0 ;
    outline: none;

    @media ${device.laptopS}{
        width: 275px;
    }

    @media ${device.laptop}{
        width: 300px;
    }

    @media ${device.laptopL}{
        width: 325px;
    }
    
    &:hover{
        background-color:${props => props.disabled ? "none" : "rgba(44,62,80,0.95)" } 
    }
`

export const AddToCart = ({ productId, setAlert })=>{
    
    const { isSignedIn, setData, data } = useContext(DataContext)
    const { email } = data
    const [isSubmitting, setIsSumbitting] = useState(null)

    const HANDLE_ADDING_ITEMS = gql`
		mutation HandleAddingItems($email: String!, $productId: Int!){
			handleAddingItems(email: $email, productId: $productId){
				result
				cartItems{
					productId
					qty
				}
			}
		}
	`

    const [handleAddingItems] = useMutation(HANDLE_ADDING_ITEMS, {
        onCompleted({ handleAddingItems }) {
            if (handleAddingItems.result) {
                setData(editCartItems(handleAddingItems.cartItems))
                setIsSumbitting(null)
            }
        }
    })


    const onAddingItems = async (productId) => {
        if (isSignedIn) {
            setIsSumbitting(productId)
            handleAddingItems({ variables: { email, productId } })
            // const response = await fetch('http://localhost:8888/additem', {
            //     method: 'put',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({
            //         email,
            //         productId
            //     })
            // })
            // const { result, cartItems } = await response.json()
            // if (result.nModified) {
            //     setData(editCartItems(cartItems))
            //     setIsSumbitting(null)
            // }
        } else {
            setAlert(true)
        }
    }

    return(
        <AddToCartButton 
            onClick={()=> onAddingItems(productId)}
            disabled={isSubmitting === productId}
        >
            ADD TO CART
        </AddToCartButton>
    )
}