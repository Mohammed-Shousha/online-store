import styled from 'styled-components'
import { device } from '../Data/Constants'

export const ProductsTitle = styled.h2`
    width: 90vw;
    font-size: 1.25em;
	margin: 3.75em auto 0;
	text-align: left;
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

export const AddToCart = styled.button`
    width: 250px;
	height: 40px;
	background-color: rgba(44,62,80,.75);
	color: white;
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
        background-color: rgba(44,62,80,0.95)
    }
`