import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../Data/Constants'
import google from '../Data/Icons/google-icon.svg'


const fgColor = '#f5fcfc'
const bgColor = '#4bb1bd'

export const Button = styled.button`
   border: none;
	background:${props => props.disabled ? '#eeeeee' : '#2196f3'};
	color: ${props => props.disabled ? '#1010104D' : 'white'};
   font-size: 0.8em;
	font-weight: bold;
	border-radius: 5px;
	margin: 0.75em 0;
	padding: 0.75em 1.25em;
	outline: none;
	cursor: pointer;
	visibility: ${props => props.hide ? 'hidden' : ''};

    @media ${device.laptopS}{
      font-size: 0.85em;
    }

    @media ${device.laptopL}{
      font-size: 0.9em;
      padding: 0.85em 1.5em;
    }

    @media ${device.desktop}{
      font-size: 1em;
    }
`
export const LinkButton = ({ children, to }) => (
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
   background-color: ${props => props.grey ? '#342b38' : props.disabled ? '#eeeeee' : props.rev ? fgColor : bgColor};
	color: ${props => props.disabled ? '#101010' : props.rev ? bgColor : fgColor};
   font-size: 0.7em;
   font-weight: bold;
	padding: 0.75em 1.25em;
   letter-spacing: 1px;
   cursor: pointer;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   margin: 5px 0;
   outline: none;

    &:active{
      transform: scale(0.95);
    }

    @media ${device.tablet}{
      font-size: 0.8em;
    }

    @media ${device.laptopS}{
      font-size: 0.85em;
    }

    @media ${device.desktop}{
      font-size: 0.9em;
      padding: 0.85em 1.5em;
    }
`

export const MapButton = styled(FormButton)`
    position: absolute
`


export const GoogleIcon = styled.img.attrs(props => ({
   src: google,
   alt: 'google-icon'
}))`
      height: 15px;
      width: 15px;
      margin: 0 5px;

   @media ${device.tablet}{
      height: 18px;
      width: 18px;
    }

    @media ${device.laptop}{
      height: 20px;
      width: 20px;
    }

    @media ${device.desktop}{
      height: 25px;
      width: 25px;
    }
`