import styled from 'styled-components'

const DropDown = styled.div `
    display: inline-block;
    font-size: 1.1rem;
    cursor: pointer;
    width: 170px;

    @media (max-width:780px){
        font-size: 0.85rem
    }

    @media (max-width:600px){
        font-size: 0.65rem
    }
    &:hover{
        div{
            display:block;
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
        background-image: linear-gradient(to right, #434343 0%, black 100%);
        min-width: 8em;
        box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.2);
        border-radius: 2px;
        padding: 0.5rem 20px;
        z-index: 1;
        margin: 0;
        font-size: 1em;

        p{
            color: #b8b0b0;
            padding: 0.25rem 0;
            /* text-align: left; */
            margin: 0;
            cursor: pointer;

            &:hover{
                color: white;
            }
        }
    }
`

export default DropDown