import styled from 'styled-components'
import FlexContainer from './FlexContainer'
import { device } from '../Data/Constants'

const greenGradient = 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)'

export const SidebarContainer = styled.div `
    height: 100%;
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: ${greenGradient};

    @media ${device.tablet}{
        width:35%;
    }

    @media ${device.laptopS}{
        width:30%;
    }

    > img{
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
    }

    h4 {
        text-align:left;
        margin:2rem 1rem;
    }
`

export const BackContainer = styled(FlexContainer) `
    visibility:${props => props.hide ? 'hidden' : '' };
    width:50%;

    p{
        font-size:1em;
        font-weight:bold;
        margin:0.5rem 0;
    }

    img{
        width:0.75rem;
    }

`