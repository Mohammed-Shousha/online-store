import styled from 'styled-components'
import { device } from '../Data/Constants'

const blueGradient = 'linear-gradient(150deg, #a1c4fd 0%, #c2e9fb 100%)'
const whiteGradient = 'linear-gradient(0deg, #fdfbfb 0%, #ebedee 100%)'

export const Navbar = styled.div `
    display: ${props => props.small ? 'none' :'flex'};
    align-items:center;
    justify-content: space-between;
    height: 3em;
    background-image: ${props => props.small ? whiteGradient : blueGradient};

    @media ${device.laptop}{
        display: flex;
        height: ${props => props.small ? '2.25em' : '3.75em'};
        margin-top: ${props => props.small ? '3.75em' : '0'};
    }
`

export const MainNav = styled(Navbar) `
    position: fixed;
	top: 0;
    right:0;
    left:0;
	z-index: 50;
    justify-content: space-around;

    img{
        width: 1rem;
        margin: 0 5px;

        @media ${device.laptop}{
            width: 1.25rem;
        }

        @media ${device.desktop}{
            width: 1.5rem;
        }
    }
`