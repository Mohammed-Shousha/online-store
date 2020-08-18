import styled from 'styled-components'

const gradient = 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)'

const DropDown = styled.div `
    display: inline-block;
    font-size: 1.1rem;
    width: 170px;

    @media (max-width:780px){
        font-size: 0.85rem
    }

    @media (max-width:600px){
        font-size: 0.65rem
    }
    &:hover{
        div{
            display:flex;
            justify-content:space-around;
            align-items:center;
        }
    }

    p{
        margin: 0.5rem 1rem;
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