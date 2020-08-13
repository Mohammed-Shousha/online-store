import styled from 'styled-components'
import { Form, Field } from 'formik'
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'
import { particles } from '../Data/Database'

export const FormContainer = styled.div`
    position: absolute;
    top: 4.5rem;
    right: 0;
    left: 0;
    margin: auto;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 15px 50px;
    width: 440px;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25);
    z-index: 1;
`

export const StyledField = styled(Field)`
    font-size:15px;
    border-radius:10px;
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 10px 0;
`

export const ActiveForm = styled(Form) `
    visibility:${props => props.active ? '': 'hidden'};
`

export const FormMap = styled.div `
    position: absolute;
    top:2rem;
    right: 0;
    left: 0;
    z-index: 999;
    visibility: ${props => props.active ? '': 'hidden'};
`

export const LinkText = styled(Link) `
    position: absolute;
    top:0;
    left:0;
    display: flex;
    white-space: nowrap;
    cursor: pointer;
    z-index: 2;

    img{
        margin: 0 0.25rem;
        width: 1.5rem;
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
`

