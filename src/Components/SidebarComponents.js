import styled from 'styled-components'
import FlexContainer from './FlexContainer'
import { device } from '../Data/Constants'

const greenGradient = 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)'

export const SidebarContainer = styled.div`
    height: 100%;
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: ${greenGradient};

    @media ${device.tablet}{
        width: 35%;
    }

    @media ${device.laptopS}{
        width: 30%;
    }

    /* x */
    > img{
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
    }

    /*categories*/
    h2 {
        font-size: 1.15em;

        @media (min-width: 24em){
            font-size: 1.25em;
        }

        @media ${device.tablet}{
            font-size: 1.35em;
        }

        @media ${device.laptopS}{
            font-size: 1.5em;
        }
    }

    /*category*/
    h4 {
        text-align: left;
        margin: 2rem 1rem;
        font-size: 0.8em;

        @media (min-width: 24em){
            font-size: 0.9em;
        }

        @media ${device.tablet}{
            font-size: 1em;
        }

        @media ${device.laptopS}{
            font-size: 1.15em;
        }
    }

    /* > */
    img{
        width: 0.85em;

        @media ${device.laptopS}{
            width: 1.15em;
        }
    }
`

export const BackContainer = styled(FlexContainer)`
    visibility: ${props => props.hide ? 'hidden' : ''};
    width: 50%;

    /*back*/
    p{
        font-size: 0.8em;
        font-weight: bold;
        margin: 0.5rem 0;

        @media (min-width: 24em){
            font-size: 0.9em;
        }

        @media ${device.tablet}{
            font-size: 1em;
        }

        @media ${device.laptopS}{
            font-size: 1.15em;
        } 
    }

    /* < */
    img{
        width: 0.85em;

        @media ${device.laptopS}{
            width: 1.15em;
        }
    }
`