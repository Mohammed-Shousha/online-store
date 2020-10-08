import styled from 'styled-components'
import { device } from '../Data/Constants'

export const Contact = styled.div `
	background: #c3cfe2;
    position:${props => props.bottom && 'absolute'} ;
    bottom: 2.5em;
    right:0;
    left:0;

    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    /*contact us */
    h2{
        padding-top: 1em;
        font-size: 1em;

        @media ${device.tablet}{
            font-size: 1.15em;
        }

        @media ${device.laptopS}{
            font-size: 1.25em;
        }

        @media ${device.laptop}{
            font-size: 1.5em;
        }

        @media ${device.laptopL}{
            font-size: 1.75em;
        }
    }

    /* social icons */
    img{
        width: 1.5em;
        margin: 1em 0;

        @media ${device.tablet}{
            width: 2em;
        }

        @media ${device.laptopS}{
            width: 2.25em;
        }

        @media ${device.laptop}{
            width: 2.5em;
        }

        @media ${device.laptopL}{
            width: 2.75em;
        }
    }
`

export const FooterContainer = styled.footer `
    height: 2.5em;
	background: black;
	color: white;
	white-space: nowrap;
    position:${props => props.bottom && 'absolute'} ;
    bottom:0;
    right:0;
    left:0;

    @media ${device.laptopS}{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 2em;
    }

    @media ${device.laptopL}{
        height: 2.5em;
    }
    
    /* all right reserved */
    h1{
        font-size: 0.75em;
        margin: 0;
        padding-top: 0.25em;

        @media ${device.laptopS}{
            font-size: 0.8em;
        }

        @media ${device.laptopL}{
            font-size: 0.9em;
        }
    }

    /* about us */
    p{
        font-size: 0.55em;
        cursor: pointer;

        @media ${device.laptopS}{
            font-size: 0.65em;
        }

        @media ${device.laptopL}{
            font-size: 0.75em;
        }

        span:hover{
            color: grey;
        }
    }
`