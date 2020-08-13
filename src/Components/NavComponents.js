import styled from 'styled-components'

export const NavText = styled.div `
    display: flex;
	font-size: 1.25rem;
	cursor: pointer;
    padding: 0.25rem 1.5rem;
    position: ${props => props.relative? 'relative': ''};

    img{
        width:20px;
        margin: 0 7px;
    }

    @media (max-width: 780px){
		font-size: 1rem;
    }

    @media (max-width: 600px){
		font-size: 0.75rem;
    }

`

export const UserAction = styled.div `
	display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.1rem;
	font-size: 0.75em;
    margin: 0;
    
    img{
        width:20px;
        margin-right:7px;

        @media (max-width:780px){
            width:15px;
        }
    }

    &:hover{
        color:${props => props.signOut? 'red': ''}
    }
`

export const CartCircle = styled.div `
    border-radius: 50%;
	color: red;
	background:white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1rem;
	width: 1rem;
	font-size: 0.75rem;
	margin-left:-0.9rem ; 
    margin-top: -1.3rem;
    visibility:${props => props.hide? 'hidden' : ''};
`

export const UserActionsContainer = styled.div `
    width: 10rem;
    background-color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 0;
    position: absolute;
    z-index: 12;
    left: 50%;
    top: 120%;
    margin-left: -5rem;
    box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.2);
    font-size:20px;

        @media (max-width:780px){
            width: 7.5rem;
            margin-left: -3.75rem;
            font-size:15px;
        }

    &::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent white transparent;
    }

    div:hover {
        background: rgba(0,0,0,0.05);
    }
`