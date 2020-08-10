import styled from 'styled-components'

export const Square = styled.div `
    border-radius:6px;
	background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
	color: white;
	width: 20rem;
	height: 12rem;
	margin:1rem 4rem; 
	padding: 4rem 0rem;
	font-size: 3rem;
	cursor: pointer;
	transition-duration: .7s;
    @media (max-width: 1150px) {
        margin:2rem;
    }
    
    &:hover{
        transform: scale(1.05);
    }
`

export const Arrow = styled.img `
    width: 3rem;
    cursor:pointer;
`

export const CategoriesContainer = styled.div `
    margin: 150px 0;
    h1{
        text-align:center;

        &:hover{
            color:#1e3c72;
        }
    }
`