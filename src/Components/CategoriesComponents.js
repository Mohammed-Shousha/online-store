import styled from 'styled-components'

const gradient = 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)'

export const CategoriesContainer = styled.div `
    margin: 150px 0;
    text-align:center;
    h1{
        width:250px;
        margin: 10px auto;
        
        &:hover{
            color:#93a5cf;
        }
    }
`


export const Square = styled.div `
    border-radius:6px;
	background-image: ${gradient};
    color: white;
    display: flex;
    align-items:center;
    justify-content:center;
	width: 300px;
	height: 70px;
	margin:1rem 4rem; 
	padding: 4rem 0rem;
	font-size: 3rem;
	cursor: pointer;
    box-shadow: -7px 7px 10px rgba(0,0,0,0.2);
	transition-duration: .7s;
    @media (max-width: 1150px) {
        margin:2rem;
    }
    
    &:hover{
        transform: scale(1.05);
    }

    img{
        width:150px;
    }
`

export const Arrow = styled.img `
    width: 3rem;
    cursor:pointer;
`