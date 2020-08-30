import styled from 'styled-components'
import { device } from '../Data/Constants'

const Title = styled.h1`
    width:100%;
    margin: 2.75em 0.5em 0.5em;
    text-align: left;
    font-size:${props => props.h1 ? '1.5em' : props.h2 ? '1.25em' : props.h3 ? '1.17em' : '1em'};

    @media ${device.tablet}{
        font-size:${props => props.h1 ? '1.65em' : props.h2 ? '1.25em' : props.h3 ? '1.17em' : '1em'};
        width: 80%;
        margin-left: auto;
        margin-right:auto;
    }

    @media ${device.laptopS}{
        font-size:${props => props.h1 ? '1.75em' : props.h2 ? '1.25em' : props.h3 ? '1.17em' : '1em'};
        margin-left: 1em;
    }

    @media ${device.laptop}{
        margin-top: 1.5em;
    }

    @media ${device.laptopL}{
        font-size:${props => props.h1 ? '1.85em' : props.h2 ? '1.25em' : props.h3 ? '1.17em' : '1em'};
        margin-left: 1.25em;
    }

    @media ${device.desktop}{
        font-size:${props => props.h1 ? '2em' : props.h2 ? '1.25em' : props.h3 ? '1.17em' : '1em'};
        margin-left: 1.5em;
    }
`

export default Title