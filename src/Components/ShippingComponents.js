import styled from 'styled-components'
import { device } from '../Data/Constants'

const activeStyle = '1.2px solid #2196f3'

export const ShippingDetails = styled.div`
	width: 70%;
    min-height: 15em;
	margin: 1.5em 0rem;
	padding: 1em 0.5em ;
    border: ${props => props.active ? activeStyle : '1px solid grey'};
	border-radius: 3px;
	box-shadow: -5px 5px 5px 1px #b1b493;
	background: #f7f7ee;
    cursor: pointer;
    display: ${props => props.new ? 'flex' : ''};
    justify-content: center;
    align-items: center;

    @media ${device.tablet}{
        width: 20em;
    }

    @media ${device.laptopS}{
        width: 25%;
        min-height: 17em;
        margin: 1.5em 2em 2em;
    }

    @media ${device.laptopL}{
        width: 20%;
    }
    
    &:hover{
        border: ${activeStyle};
    }

    /* address name */
    h3{
        text-align: center;
        text-transform: uppercase;
        margin: 0.75em 0;
        font-size: 1.15em;

        @media ${device.tablet}{
            font-size: 1.25em;
        }

        @media ${device.laptop}{
            font-size: 1.35em;
        }
    }

    div{
        text-align: left;
        margin: 1rem 0.5rem;
    }

    /* label */
    h4{
        font-weight:normal;
        color: grey;
        font-size: 1em;
        margin: 0;

        @media ${device.tablet}{
            font-size: 1.1em;
        }

        @media ${device.laptop}{
            font-size: 1.15em;
        }
    }

    /* details */
    p{
        color: black;
        margin: 0.5em 0 0.75em 0;
        font-size: 0.9em;

        @media ${device.tablet}{
            font-size: 1em;
        }

        @media ${device.laptop}{
            font-size: 1.05em;
        }
        
        /* name */
        strong{
            font-size: 1.1em;
        }
    }

    /* field */
    input{
        width: 100%;
        font-size: 1em;
        margin: 0.5em 0;
        border: none;
        border-bottom: 1px solid grey;
        outline: none;
        background: #f7f7ee;

        @media ${device.tablet}{
            font-size: 1.05em;
        }

        @media ${device.laptop}{
            font-size: 1.1em;
        }
    }

    /* + */
    img{
        width: 1em;
        margin: 0 0.75em;
    }

`

export const AddressActions = styled.div `
    &&{
        position: relative;
        display: flex; 
        justify-content: flex-end;
        align-items: center;
        margin: 0;
    }
`

export const BackTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    margin: 1.5em auto -16px;
    width:85vw;
    text-align: left;
    cursor: pointer;

    /* back to addresses */
    h3{
        font-size: 1em;
        margin: 0;
        margin-left: 0.35em;

        @media ${device.tablet}{
            font-size: 1.05em;
        }

        @media ${device.laptopS}{
            font-size: 1.1em;
        }

        @media ${device.laptopL}{
            font-size: 1.2em;
        }

        @media ${device.desktop}{
            font-size: 1.25em;
        }
    }

    /* < */
    img{
        width: 0.75em;

        @media ${device.laptopS}{
            width: 0.85em;
        }

        @media ${device.laptopL}{
            width: 1em;
        }
    }
`