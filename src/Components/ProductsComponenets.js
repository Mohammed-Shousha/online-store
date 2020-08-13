import styled from 'styled-components'

export const ProductsTitle = styled.h2 `
    width:85vw;
	margin: auto;
	text-align: left;
	color: rgba(0,0,0,0.8);
	border-bottom:${props => props.title ? '0.1rem solid rgba(0,0,0,0.8)': 'none' };
`

export const ProductsContainer = styled.div `
    display:flex;
    justify-content:center;

    & >div{
        display:flex;
        justify-content:center;
        margin:1.25rem 0;

        @media(max-width: 1280px){
            flex-direction:column;
        }

        & >div{
        display:flex;
        justify-content:center;

            @media(max-width: 700px){
                flex-direction:column;
            }
        }


    }
`

export const AddToCart = styled.button `
    width: 300px;
	height: 40px;
	background-color: rgba(44,62,80,.75);
	color: white;
	border: 0;
	border-radius: 0.25rem;
	padding: 5px 0 0 0 ;
    outline: none;
    
    &:hover{
        background-color:rgba(44,62,80,0.95)
    }
`