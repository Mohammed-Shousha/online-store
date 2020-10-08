import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../Data/Constants'
import x from '../Data/Icons/x.svg'
import { DataContext } from '../Data/DataContext'

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

	strong{
		cursor: pointer;
	}
`

const Alert = ({ setAlert, confirm, address }) => {
	const { data, setConfirmNav } = useContext(DataContext)
	const { email } = data

	const resendEmail = async () =>{
		const response = await fetch('http://localhost:8888/resendemail', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email })
		})
		const result = await response.json()
		if(result === 'Success'){
			setConfirmNav(true)
			setAlert(false)
		}

	}
	return(
		<AlertContainer>
			<img src={x} alt='x' onClick={() => setAlert(false)} />
			{address ?
				<h4> Please Select an Address </h4>
			:confirm ?
				<p> To Checkout You Need To Confirm Your Email<br />
					<strong onClick={resendEmail}>Resend Confirmation Email</strong>
				</p>
			:
				<p>In Order to Add Items to Your Cart <br />
					<Link to='/signin'>
						<strong>SignIn or SignUp</strong>
					</Link>
				</p>
			}
		</AlertContainer>
	)
}

export default Alert
