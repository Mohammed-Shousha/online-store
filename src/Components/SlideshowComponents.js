import styled from 'styled-components'
import { device } from '../Data/Constants'

export const SlideContainer = styled.div `
    width: 75vw;
    margin: 80px auto;
`

export const SlidePhoto = styled.img `
    justify-content: center;
    align-items: center;
    height: auto;
    width: 225px;

    @media ${device.tablet}{
        width: 275px;
    }

    @media ${device.laptopS}{
        width: 350px;
    }

    @media ${device.laptop}{
        width: 400px;
    }

    @media ${device.laptopL}{
        width: 450px;
    }

    @media ${device.desktop}{
        width: 500px;
    }
    
`