import styled from 'styled-components'
import { device } from '../Data/Constants'

const Title = styled.h1`
    width: 95%;
    margin: 2.75em 0.5em 0.5em;
    text-align: left;
    font-size: ${props => props.h1 ? '1.5em' : props.h2 ? '1.15em' : props.h3 ? '0.85em' : '0.75em'};

    @media ${device.tablet}{
        font-size:${props => props.h1 ? '1.65em' : props.h2 ? '1.25em' : props.h3 ? '0.9em' : '0.8em'};
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    @media ${device.laptopS}{
        font-size:${props => props.h1 ? '1.75em' : props.h2 ? '1.4em' : props.h3 ? '0.95em' : '0.85em'};
        margin-left: 1em;
    }

    @media ${device.laptop}{
        margin-top: 1.5em;
    }

    @media ${device.laptopL}{
        font-size:${props => props.h1 ? '1.85em' : props.h2 ? '1.5em' : props.h3 ? '1em' : '0.9em'};
        margin-left: 1.25em;
    }

    @media ${device.desktop}{
        font-size:${props => props.h1 ? '2em' : props.h2 ? '1.5em' : props.h3 ? '1.17em' : '1em'};
        margin-left: 1.5em;
    }
`

export const CheckoutTitle = styled(Title) `
    margin: 1em 0.5em;
    text-align: ${props => props.center ? 'center' : 'left'};

    @media ${device.tablet}{
        margin-left: ${props => props.center ? 'auto' : '8px'};
    }

    @media ${device.laptopS}{
        margin-left: ${props => props.center ? 'auto' : '16px'};
    }

    @media ${device.laptopL}{
        margin-left: ${props => props.center ? 'auto' : '20px'};
    }
`

export default Title