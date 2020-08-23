import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { device } from '../Data/Constants'

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
export const LinkButton = ({children, to})=>(
    <Link to={to}>
        <Button>
            {children}
        </Button>
    </Link>
)

export const FormButton = styled.button.attrs(props => ({
	type: props.type || 'submit',

}))`
    border-radius: 10px;
    border: none;
    background-color: ${props => props.grey ? '#342b38' : '#4bb1bd'};
    color: #FFFFFF;
    font-size: 0.7em;
    font-weight: bold;
    padding: 0.75em;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin-bottom : 5px;
    outline: none;

    &:active{
        transform: scale(0.95);
    }

    @media ${device.tablet}{
        font-size:0.85em;
    }

    @media ${device.desktop}{
        font-size:1em;
    }


`

export const MapButton = styled(FormButton)`
    position: absolute
`