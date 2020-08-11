import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled.button `
    border:none;
	background: #2196f3;
	color: white;
	font-weight: bold;
	border-radius: 5px;
	margin: 1rem 0;
	padding: 0.75rem 1.25rem;
	outline: none;
	cursor: pointer;
	visibility: ${props =>props.hide? 'hidden':''};
`
const LinkButton = ({children, to})=>(
    <Link to={to}>
        <Button>
            {children}
        </Button>
    </Link>
)

export default LinkButton