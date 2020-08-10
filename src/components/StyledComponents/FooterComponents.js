import styled from 'styled-components'

export const Contact = styled.div `
	background: #c3cfe2;
    
    h2{
        padding: 1.25rem 0 0.25rem;
    }

    img{
        width: 2.5rem;
        margin:0 2rem 1rem;

        @media (max-width: 460px){
            width: 1.25rem;
        }
    }
`

export const FooterContainer = styled.footer `
    display: flex;
    justify-content: center;
    align-items:center;
	background: black;
	color: white;
	white-space: nowrap;
	position: relative;
	bottom: 0;
	right: 0;
    left: 0;
    
    h1{
        font-size: 0.8rem;
        margin: 0 3rem;
        font-weight: bold;
        
        @media (max-width: 600px){
            font-size: 0.6rem;
        }

    }

    p{
        font-size: 0.75rem;

        @media (max-width: 600px){
            font-size: 0.4rem;
        }

        span:hover{
            color: grey;
            cursor: pointer;
        }
    }

`