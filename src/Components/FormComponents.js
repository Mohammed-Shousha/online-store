import styled from 'styled-components'
import { Field } from 'formik'
import {Link} from 'react-router-dom'
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
    width: 70% ;
    min-height: 75%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25);
    z-index: 1;

    @media ${device.tablet}{
        width: 50%;
    }

    @media ${device.laptopS}{
        width: 24em;
        min-height: 29em;
    }

    @media ${device.laptopL}{
        width: 27em;
    }

    /* label ' signIn - signUp '*/
    h1{
        font-size: 1.5em;

        @media ${device.tablet}{
            font-size: 1.75em;
        }

        @media ${device.laptopS}{
            font-size: 2em;
        }

        @media ${device.desktop}{
            font-size: 2.25em;
        }
    }

    /* have account? */
    p{
        font-size: 0.8em;

        @media ${device.tablet}{
            font-size: 1em;
        }

        @media ${device.desktop}{
            font-size: 1.25em;
        }
    } 
`

export const StyledField = styled(Field)`
    font-size: 0.8em;
    border-radius: 10px;
    background-color: #eee;
    border: none;
    padding: 0.75em;
    margin: 0.5em 0;

    @media ${device.tablet}{
        font-size: 1em;
    }

    @media ${device.desktop}{
        font-size: 1.15em;
    }
`

export const VisibleDiv = styled.div `
    visibility: ${props => props.visible ? '' : 'hidden'};
`

export const FormMap = styled(VisibleDiv) `
    position: absolute;
    top: 2rem;
    right: 0;
    left: 0;
    z-index: 999;
`

export const LinkText = styled(Link) `
    font-size: 0.75em;
    display: flex;
    white-space: nowrap;
    cursor: pointer;
    z-index: 2;

    @media ${device.tablet}{
        font-size: 0.8em;
    }

    @media ${device.laptopS}{
        font-size: 0.9em;
    }

    @media ${device.laptop}{
        font-size: 1em;
    }

    @media ${device.laptopL}{
        font-size: 1.1em;
    }

    @media ${device.desktop}{
        font-size: 1.2em;
    }

    img{
        margin: 0 0.25rem;
        width: 1em;

        @media ${device.laptopS}{
            width: 1.1em;
        }

        @media ${device.laptop}{
            width: 1.15em;
        }
    }
`