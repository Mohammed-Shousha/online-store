import styled from 'styled-components'
import { device } from '../Data/Constants'

export const PaymentButton = styled.button `
	width: 40%;
	margin: 0 1em;
	padding: 0.75em 0.5em;
	font-weight: bold;
	font-size: 1em;
	border-radius: 3px;
	border: solid ${props => props.active ? '1.2px #2196f3' : '1px grey'};
	background: #f7f7ee;
	color: ${props => props.active? 'black' :'grey'};
    outline: none;
    cursor: pointer;

	@media ${device.laptopS}{
		width: 35%;
	}

	/* pay with */
	p{
		margin: 0;
		font-size: 0.85em;

		@media ${device.tablet}{
			font-size: 0.9em
		}

		@media ${device.laptop}{
			font-size: 1em
		}

		@media ${device.desktop}{
			font-size: 1.15em
		}
	}
    
	/* cash || card */
    img{
        width: 2em;

		@media ${device.laptop}{
			width: 2.25em
		}

		@media ${device.desktop}{
			width: 2.5em
		}
    }
`

export const PaymentContainer = styled.div `
	display: flex;
	flex-direction: column;
	align-content: center;
	font-size: 0.8em;
	width: 77%;
	margin: 1.5em auto; 
	padding: 0.75em 1.75em;
    text-align: left;
	line-height: 200%;
	border: 1px solid grey;
	border-radius: 3px;
    background: #f7f7ee;

	@media ${device.tablet}{
		font-size: 0.9em
	}

	@media ${device.laptopS}{
		width: 68%;
	}

	@media ${device.laptop}{
		font-size: 1em;
	}

	@media ${device.desktop}{
		font-size: 1.15em
	}
    
    strong{
        cursor: pointer;
    }
`

export const StripeForm = styled.form `
	display: flex;
	flex-direction: column;
	align-content: center;
	
	> div {
		margin: 1em 0;
	}
`