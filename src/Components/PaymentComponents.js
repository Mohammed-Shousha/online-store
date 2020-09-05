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

	@media ${device.laptop}{
		width: 30%;
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

export const CashPayment = styled.div `
	font-size: 0.8em;
	width: 75%;
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
		width: 65%;
	}

	@media ${device.laptop}{
		width: 60%;
		font-size: 1em;
	}

	@media ${device.desktop}{
		font-size: 1.15em
	}
    
    strong{
        cursor: pointer;
    }
`