import styled from 'styled-components'

export const PaymentButton = styled.button `
    outline: none;
	border: solid ${props => props.active ? '1.2px #2196f3' : '1px grey'};
	border-radius: 3px;
	background: #f7f7ee;
	color:${props => props.active? 'black' :'grey'};
	min-width: 35%;
	margin: 0 1.75rem;
	padding: 1.25rem;
	font-weight: bold;
    cursor: pointer;
    
    img{
        width: 2rem;
        margin: -0.5rem 0.75rem;
    }
`

export const CashPayment = styled.div `
    text-align: left;
	font-size: 0.9rem;
	line-height: 200%;
	border: 1px solid grey;
	border-radius: 3px;
	max-width: 75%;
	margin: 1.5rem 0.75rem; 
	padding: 0.75rem 1.75rem;
    background: #f7f7ee;
    
    strong{
        cursor:pointer;
    }
`