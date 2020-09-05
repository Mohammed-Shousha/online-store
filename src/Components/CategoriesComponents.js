import styled from 'styled-components'
import { device } from '../Data/Constants'

const gradient = 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)'

export const CategoriesContainer = styled.div `
    margin: 12em 0;
    text-align: center;

    /* category */
    h1{
        font-size: 1.5em;
        width: 250px;
        margin: 0.5em auto;

        &:hover{
            color: #93a5cf;
        }

        @media ${device.tablet}{
            font-size: 1.75em;
        }

        @media ${device.desktop}{
            font-size: 2.25em;
        }
    }
`

export const Square = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
	background-image: ${gradient};
    color: white;
	width: 12em;
	height: 8em;
	margin: 1.5em 0;
	cursor: pointer;
    box-shadow: -7px 7px 10px rgba(0,0,0,0.2);
	transition-duration: 0.7s;

    @media ${device.tablet}{
        width: 15em;
        height: 10em;
    }

    @media ${device.laptopS}{
        width: 12em;
        height: 8em;
        margin: 1em;
    }

    @media ${device.laptop}{
        width: 15em;
        height: 10em;
        margin: 1.5em;
    }

    @media ${device.laptopL}{
        width: 17em;
        height: 11em;
        margin: 1.5em 1.75em;
    }

    @media ${device.desktop}{
        width: 20em;
        height: 13em;
        margin: 1.5em 2em;
    }
    
    &:hover{
        transform: scale(1.05);
    }

    /* category img */
    img{
        width: 5em;

        @media ${device.tablet}{
            width: 6em;
        }

        @media ${device.laptopS}{
            width: 5em;
        }

        @media ${device.laptop}{
            width: 6em;
        }

        @media ${device.laptopL}{
            width: 6.75em;
        }   

        @media ${device.desktop}{
            width: 7.5em;
        }   
    }
`

export const Arrow = styled.img `
    width: 1.5em;
    cursor: pointer;

    @media ${device.tablet}{
        width: 2em;
    }

     @media ${device.desktop}{
        width: 2.5em;
    } 
`