import styled from 'styled-components'
import { device } from '../Data/Constants'

export const BackDiv = styled.div `
    /* back link */
    a{
        display: flex;
        align-items: center;
    }
    
    /* checkout , back title */
    &  ~ h3, h3{
        font-size: 1em;

        @media ${device.tablet}{
            font-size: 1.15em;
        }

        @media ${device.laptop}{
            font-size: 1.25em;
        }

        @media ${device.desktop}{
            font-size: 1.35em;
        }
    }

    /* < */
    img{
        width: 1em;
        margin: 0 0.25rem 0 0.75rem;

        @media ${device.tablet}{
            width: 1.15em;
        }

        @media ${device.laptop}{
            width: 1.2em;
        }

        @media ${device.desktop}{
            width: 1.25em;
        }
    }
`

export const CheckoutStep = styled.div `
    display: flex;
    align-items: center;
    font-weight: ${props => props.active? 'bold': ''};
    
    /* check img / */
    img{
        width: 1em;
	    margin: 0 9px; 

        @media ${device.tablet}{
            width: 1.35em;
        }   

        @media ${device.laptop}{
            width: 1.65em;
        }   
    }
`

export const NumCircle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
	background: ${props => props.active ? '#2196f3' : 'transparent'};
	color: ${props => props.active ? 'white' : 'grey'};
	border: ${props => props.active ? '#2196f3' :'grey'} 1px solid;
	height: 1.25em;
	width: 1.25em;
    font-size: 0.75em;
	margin: 0 9px;

    @media ${device.tablet}{
        width: 1.5em;
        height: 1.5em;
        font-size: 0.85em;
    }

    @media ${device.laptop}{
        width: 1.65em;
        height: 1.65em;
        font-size: 0.95em;
    }
`