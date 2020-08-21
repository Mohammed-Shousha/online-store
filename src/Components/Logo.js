import React from 'react'
import styled from 'styled-components'
import logo from '../Data/Icons/store.svg'
import { Link } from 'react-router-dom'
import { device } from '../Data/Constants'


const LogoImg = styled.img.attrs(props =>({
    src : logo,
    alt:'logo'
})) `
    &&{
        width: 1.5rem;
        margin: 0 1em;
        outline:none;

         @media ${device.laptop}{
            width: 2rem;
        }

        @media ${device.desktop}{
            width: 2.5rem;
        }
    }
`

const Logo = ()=>(
    <Link to='/'>
        <LogoImg/>
    </Link>
)


export default Logo