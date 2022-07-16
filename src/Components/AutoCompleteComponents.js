import styled from "styled-components"
import { device } from '../Data/Constants'

export const AutoCompleteContainer = styled.div`
   width: 20%;
	margin: auto 7px;

   @media ${device.tablet}{
		width: 35%;
	}

   @media ${device.laptop}{
		width: 50%;
	}
`

export const AutoCompleteInput = styled.input`
   font-size: 1em;
	width: 100%;
	padding: 0.5em;
	border: 0;
	border-radius: 1rem;
	outline: none;
   border-bottom-left-radius: ${props => props.open ? 0 : ''};
	border-bottom-right-radius: ${props => props.open ? 0 : ''};
	border-bottom: ${props => props.open ? '1px grey solid' : ''};
	margin-top: ${props => props.open ? '13px' : ''};

   @media ${device.laptop}{
		font-size: 1.2em;
		padding: 0.35em;
	}
`

export const SuggestionsContainer = styled.div`
   display: block;
	flex-direction: column;
	text-align: left;
	background-color: #fff;
	box-shadow: 0 10px 12px 0 rgba(0,0,0,0.3);
	z-index: 2;
   font-size: 0.8em;
   width: 100%;
   border-bottom-left-radius: 1rem;
   border-bottom-right-radius: 1rem;

   @media ${device.tablet}{
		width: 106%;
	}

   @media ${device.laptopS}{
		width: 104.75%;
	}

   @media ${device.laptop}{
		width: 102.25%;
	}

   @media ${device.laptopL}{
	   font-size: 1em;
		width: 101.75%;
	}

   @media (min-width: 103em){
		width: 101.5%;
	}
`

export const SuggestionsList = styled.div`
   margin: 0;
	padding: 0;
	list-style-type: none;
`

export const Suggestion = styled.p`
   font-size: 1em ;
   cursor: pointer;
	padding: 10px 20px;
   margin: 0;
   background-color: ${props => props.active? 'rgba(0,0,0,0.1)': ''};

   :last-child{
      border-bottom-left-radius: 1rem;
  	   border-bottom-right-radius: 1rem;
   }
   /* :hover{
      background-color: rgba(0, 0, 0, 0.1);
   } */
`