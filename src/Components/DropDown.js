import styled from 'styled-components'
import { device } from '../Data/Constants'

const gradient = 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)'

const DropDown = styled.div `
    display: inline-block;
    width: 10em;


    &:hover{
        div{
            display:flex;
            justify-content:space-around;
            align-items:center;
        }
    }

    p{
        font-size:1em;
        margin: 0.5rem 1rem;
        white-space:nowrap;

        @media ${device.laptopL}{
            font-size:1.25em;
        }
    }

    div{
        position:absolute;
        right:0;
        left:0;
        display: none;
        background-image: ${gradient};
        min-width: 8em;
        box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.2);
        border-radius: 2px;
        padding: 0.5rem 20px;
        z-index: 1;
        margin: 0;
        font-size: 1em;

        img{
            width:40px;
            padding: 10px;
        }
    }
`

export default DropDown