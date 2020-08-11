import styled from 'styled-components'

const fc = '#d6efc7', bc = '#184d47'

export const CartButton = styled.button `
    display: flex;
	justify-content: center;
	align-content: center;
    width:${props => props.checkout ? '100%': '60%'};
	cursor: pointer;
	padding:${props => props.checkout ? '15px 50px': '10px 50px'} ;
	margin: auto;
    margin-top:${props => props.checkout ? '25px' : ''};
	border:none;
	border-radius: 5px;
	background: ${props => props.checkout ? fc :bc};
	color: ${props => props.checkout ? bc : fc};
	transition-duration: .7s;
	outline: none;

    &:hover{
        transform: scale(1.05);
    }

    p{
	    margin: auto;
    }

    img {
        width: 2rem;
        margin:auto;
        margin-left: 10px;
    }
`

export const OrderSummaryContainer = styled.div `
	width: 27rem;

    @media(max-width: 1150px){
        width: 90vw;
        margin: auto;
    }

    div{
        text-align: left;
        white-space: nowrap;
        margin: 1rem 2rem;
        padding: 3rem 3.5rem;
        background:${bc} ;
        color: ${fc};
        border-radius: 0.5rem;

        span{
            word-spacing: -5px;
            float: right;
        }
    }
`

export const CartItemsContainer = styled.div `
    display:flex;
    flex-direction:column;
    width:60vw;

    @media(max-width: 1150px){
        width: 85vw;
        margin:auto;
    }

    &>div{
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 9rem;
        background: #a2de96;
        color: #2F4858;
        border-radius: 0.5rem;
        margin:1rem 0.5rem 1.5rem 0.5rem;
        padding: 0;
    
        &>div>img{
            border-radius: 0.5rem 0 0 0.5rem; 
            width:200px;
        }
    }
`

export const ProductDetails = styled.div `
    margin-left:2rem;
	text-align: left;
	text-transform: uppercase;
`

export const ProductActions = styled.div`
    &&{
        margin-right:1rem;
        h3{
            margin: 1.25rem 0.35rem;
        }
    
        img{
            cursor: pointer;
            width:2rem;
        }
    }
`
