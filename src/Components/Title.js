import styled from 'styled-components'
import { device } from '../Data/Constants'

const Title = styled.h1`
    margin: 3em 0 0 1.5em;
    text-align: left;
    font-size:${props => props.h1 ? '2em' : props.h2 ? '1.5em' : props.h3 ? '1.17em' : '1em'};

    @media ${device.laptop}{
        margin-top: 2em;
    }
`

export default Title