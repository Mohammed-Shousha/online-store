import styled from 'styled-components'
import { device } from '../Data/Constants'

export const Circle = styled.div `
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color: white;
    background: ${props=> props.color};
    border-radius: 50%;
    margin: 2.25em 0;
    text-align: center;
    cursor: default;
    height: 10em;
    width: 10em;
    padding: 1em;

    &:hover p{
        visibility: visible;
    }

    @media ${device.tablet}{
        width:13em;
        height:13em;
    }

    @media ${device.laptopS}{
        width:10em;
        height:10em;
    }

    @media ${device.laptop}{
        width:13em;
        height:13em;
    }

    @media ${device.laptopL}{
        width:16em;
        height:16em;
    }

    @media ${device.desktop}{
        width:19em;
        height:19em;
    }

     h1{
        font-size: 1.5em;
        word-spacing: -0.25em;

        @media ${device.tablet}{
            font-size: 1.75em;
        }

        @media ${device.laptopS}{
            font-size: 1.5em;
        }

        @media ${device.laptop}{
            font-size: 1.75em;
        }

        @media ${device.laptopL}{
            font-size: 2.25em;
        }

        @media ${device.desktop}{
            font-size: 2.5em;
        }
    }

    p{
        visibility: hidden;
        font-size: 0.75em;
        color:${props => props.color};
        width: 16em;
        margin-left: -8em;
        line-height: 120%;
        font-weight: bold;
        background-color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 0.5em;
        position: absolute;
        z-index: 1;
        left: 47.5%;
        bottom: 93%;

        @media ${device.tablet}{
            font-size:0.85em;
            width:20em;
            margin-left:-10em;
        }

        @media ${device.laptopS}{
            width:16em;
            margin-left:-8em;
        }

        @media ${device.laptop}{
            font-size:1em;
            width:20em;
            margin-left:-10em;
        }

        @media ${device.desktop}{
            font-size:1.25em;
        }
        
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

    img{
        width: 4em;

        @media ${device.laptopL}{
            width:5em;
        }
    }
`