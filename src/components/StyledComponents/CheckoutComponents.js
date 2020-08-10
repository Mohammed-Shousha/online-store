import styled from 'styled-components'

export const BackDiv = styled.div ` 
    display:flex;

    img{
        width: 1.5rem;
        margin:0 0.25rem 0 0.75rem;
    }
`

export const CheckoutStep = styled.div `
    display:flex;
    align-items: center;
    font-weight: ${props => props.active? 'bold': ''};
    
    img{
        width: 1.5rem;
	    margin: 0 1rem;    
    }
`

export const NumCircle = styled.div `
    border-radius: 50%;
	background:${props => props.active ? '#2196f3' : 'transparent'};
	color: ${props => props.active ? 'white' : 'grey'};
	border: ${props => props.active ? 'none' :'1px grey solid'};
	height: 1.5rem;
	width: 1.5rem;
	margin: 0 1rem;
    padding: 0.2rem;
`