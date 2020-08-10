import styled from 'styled-components'

const blueGradient = 'linear-gradient(150deg, #a1c4fd 0%, #c2e9fb 100%)'
const whiteGradient = 'linear-gradient(0deg, #fdfbfb 0%, #ebedee 100%)'

export const Navbar = styled.div `
    display: flex;
    align-items:center;
    justify-content: space-between;
    height: ${props => props.small ? '2.25rem' : '4rem'};
    background-image: ${props => props.small ? whiteGradient : blueGradient};
    margin:${props => props.small ? '4rem 0 ' : ''};
`

export const MainNav = styled(Navbar) `
    position: fixed;
	top: 0;
	left : 0;
	right: 0;
	z-index: 50;
    justify-content:space-around;
`