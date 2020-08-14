import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import x from '../Data/Icons/x.svg'


const AlertContainer = styled.div `
    position: fixed;
	top: 0.5rem;
	right: 0;
	left: 0;
	z-index: 69;
	margin: auto;
	background: #ecf0f1;
	border:1px solid #cf1b1b ;
	border-radius: 3px;
	max-width: 400px;
    line-height: 2rem;
    
    img {
        width: 1rem;
        position: absolute;
        right: 0;
        margin: 0.25rem;
    }
`

const Alert = ({ setAlert }) => (
	<AlertContainer>
		<img src={x} alt='x' onClick={() => setAlert(false)} />
		<p>In Order to Add Items to Your Cart <br />
			<Link to='/signin'>
				<strong>SignIn or SignUp</strong>
			</Link>
		</p>
	</AlertContainer>
)

export default Alert