import React from 'react'
import styled from 'styled-components'
import logo from '../Data/Icons/store.svg'
import { Link } from 'react-router-dom'


const LogoImg = styled.img.attrs(props =>({
    src : logo,
    alt:'logo'
})) `
    width: 2.25rem;
    margin: 0 1rem;
    outline:none;
`

const Logo = ()=>(
    <Link to='/'>
        <LogoImg/>
    </Link>
)


export default Logo