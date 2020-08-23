import styled from 'styled-components'
import { Field } from 'formik'
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'
import { particles } from '../Data/Database'
import { device } from '../Data/Constants'

export const FormContainer = styled.div`
    position: absolute;
    top: 10%;
    right: 0;
    left: 0;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 0.5em 1em;
    width:70% ;
    min-height: 75%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25);
    z-index: 1;

    @media ${device.tablet}{
        width:50%;
    }

    @media ${device.laptopS}{
        width:24em;
        min-height: 29em;
    }

    @media ${device.laptopL}{
        width:27em;
    }

    h1{
        font-size:1.5em;

        @media ${device.tablet}{
            font-size:1.75em;
        }

        @media ${device.laptopS}{
            font-size:2em;
        }

        @media ${device.desktop}{
            font-size:2.25em;
        }
    }

    p{
        font-size:0.8em;

        @media ${device.tablet}{
            font-size:1em;
        }

        @media ${device.desktop}{
            font-size:1.25em;
        }
    } 
`

export const StyledField = styled(Field)`
    font-size:0.8em;
    border-radius:10px;
    background-color: #eee;
    border: none;
    padding:0.75em;
    margin: 0.5em 0;

    @media ${device.tablet}{
        font-size:1em;
    }

    @media ${device.desktop}{
        font-size:1.15em;
    }
`

export const VisibleDiv = styled.div `
    visibility: ${props => props.visible ? '' : 'hidden'};
`

export const FormMap = styled(VisibleDiv) `
    position: absolute;
    top:2rem;
    right: 0;
    left: 0;
    z-index: 999;
`

export const LinkText = styled(Link) `
    position: absolute;
    font-size:0.7em;
    top:0;
    left:0;
    display: flex;
    white-space: nowrap;
    cursor: pointer;
    z-index: 2;

    @media ${device.tablet}{
        font-size:0.8em;
    }

    @media ${device.laptopS}{
        font-size:0.9em;
    }

    @media ${device.desktop}{
        font-size:1.25em;
    }

    img{
        margin: 0 0.25rem;
        width: 1em;

        @media ${device.laptops}{
            width:1.2em;
        }
    }
`

export const ParticlesBG  = styled(Particles).attrs({
    params: particles
}) `
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    visibility:hidden;

    @media ${device.laptopS}{
        visibility: visible;
    }
    `

