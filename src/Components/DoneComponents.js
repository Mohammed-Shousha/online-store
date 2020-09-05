import styled from 'styled-components'
import { device } from '../Data/Constants'

export const DoneContainer = styled.div `
    border: 1px solid #6e6d6d;
    border-radius: 5px;
    background: #d6efc7;
    color: #382933;
    width: 80vw;
    margin: 25px auto;

    /*address label */
    p{
        color: #6e6d6d;
        font-size: 0.85em;

        @media ${device.tablet}{
            font-size: 0.9em;
        }

        @media ${device.laptopS}{
            font-size: 1em;
        }

        @media ${device.laptop}{
            font-size: 1.05em;
        }

        @media ${device.desktop}{
            font-size: 1.15em;
        }
    }

    /* payment & address details */
    h3, h4{
        font-size: 0.9em;

        @media ${device.tablet}{
            font-size: 1em;
        }

        @media ${device.laptopS}{
            font-size: 1.05em;
        }

        @media ${device.laptop}{
            font-size: 1.15em;
        }

        @media ${device.desktop}{
            font-size: 1.25em;
        }
    }


`