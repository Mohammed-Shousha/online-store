import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../Data/Constants'
import x from '../Data/Icons/x.svg'

const AlertContainer = styled.div`
	width: 70%;
	padding: 0.5em 1em;
    position: fixed;
	top: 0.5em;
	right: 0;
	left: 0;
	z-index: 69;
	margin: auto;
	background: #ecf0f1;
	border: 1px solid #cf1b1b;
	border-radius: 3px;
    line-height: 2rem;

	@media ${device.tablet}{
		width: 19em;
	}

	@media ${device.laptopS}{
		width: 22em;
	}

	@media ${device.laptopL}{
		width: 25em;
	}
    
	/* x */
    img {
        position: absolute;
        right: 0;
		top: 0;
        width: 1em;
        margin: 0.25em;

		@media ${device.laptopS}{
			width: 1.15em;
		}

		@media ${device.laptopL}{
			width: 1.25em;
		}
    }

	h4 , p{
		font-size: 0.85em;

		@media ${device.tablet}{
			font-size: 0.9em;
		}

		@media ${device.laptopS}{
			font-size: 1em;
		}

		@media ${device.laptopL}{
			font-size: 1.15em;
		}
	}
`

const Alert = ({ setAlert, checkout }) => (
	<AlertContainer>
		<img src={x} alt='x' onClick={() => setAlert(false)} />
		{!checkout ?
			<p>In Order to Add Items to Your Cart <br />
				<Link to='/signin'>
					<strong>SignIn or SignUp</strong>
				</Link>
			</p>
			:
			<h4> Please Select an Address </h4>
		}
	</AlertContainer>
)

export default Alert
