import styled from 'styled-components'

export const Tooltip = styled.div `
    position: relative;

    h1{
        font-size:50px;
        margin-bottom: 1rem;
        white-space:initial;
    }
    
    &:hover p{
        visibility: visible;
    }

    p{
        visibility: hidden;
        width: 20rem;
        font-size: 19px;
        line-height: 120%;
        font-weight: bold;
        background-color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        left: 50%;
        margin-left: -10rem;
        bottom:117%;
        
        &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: white transparent transparent transparent;
        }
    }

    /* .under{
        top: 110%;
        ::after
        bottom: 100%;
        border-color: transparent transparent white transparent;
    } */

    img{
        width: 5rem;
    }
`