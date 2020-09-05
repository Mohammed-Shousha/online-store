import styled from 'styled-components'
import search from '../Data/Icons/search.svg'
import menu from '../Data/Icons/menu.svg'
import { device } from '../Data/Constants'

export const NavText = styled.div`
    display: flex;
	font-size: 0.8em;
	cursor: pointer;
    padding: 0 0.5em;
    position: ${props => props.relative ? 'relative' : ''};

    @media ${device.tablet}{
		font-size: 1em;
    }

    @media ${device.laptopS}{
		font-size: 1.2em;
    }

    @media ${device.laptop}{
		font-size: 1.4em;
    }

    @media ${device.desktop}{
		font-size: 1.7em;
    }
`

export const SearchIcon = styled.img.attrs(props => ({
    src: search,
    alt: 'search'
}))`
    &&{
        cursor: pointer;
    }
`

export const MenuIcon = styled.img.attrs(props => ({
    src: menu,
    alt: 'menu'
}))`
    &&{
        width: 1.25rem;
        margin: 0 1em;
        outline: none;

         @media ${device.laptop}{
            display: none;
        }
    }
    
`

export const CartCircle = styled.div`
    &&{
        border-radius: 50%;
        color: red;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1em;
        width: 1em;
        font-size: 12px;
        margin-left:-0.75rem; 
        margin-top: -1.2rem;
        visibility: ${props => props.hide ? 'hidden' : ''};

        @media ${device.desktop}{
            font-size: 15px;
            margin-left: -0.8rem; 
            margin-top: -1.6rem;
        }
    }
`

export const UserAction = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
	font-size: 0.8em;
    padding: 0.5em 0;
    color: ${props => props.signOut ? 'red' : ''};

    @media ${device.laptop}{
        font-size: 1rem;
        padding: 0.75rem 0;
    }
`

export const UserActionsContainer = styled.div`
    width: 7em;
    background-color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 0;
    position: absolute;
    z-index: 12;
    left: 50%;
    top: 160%;
    margin-left: -3.5em;
    box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.2);

    @media ${device.tablet}{
        top: 155%;
    }

    @media ${device.desktop}{
        top: 140%;
    }


    &::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent white transparent;
    }

    div:hover {
        background: rgba(0,0,0,0.05);
    }
`