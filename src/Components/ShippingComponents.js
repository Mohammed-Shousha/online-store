import styled from 'styled-components'

const activeStyle = '1.2px solid #2196f3'

export const ShippingDetails = styled.div `
    border: ${props => props.active? activeStyle :'1px solid grey'};
	border-radius: 3px;
	width: 20%;
	margin: 1rem 0rem 1rem 4rem;
	padding: 1rem 0.5rem ;
	box-shadow: -5px 5px 5px 1px #b1b493;
	background: #f7f7ee;
    min-height: 250px;
    cursor: pointer;
    display:${props => props.new ? 'flex' : ''};
    justify-content:center;
    align-items:center;
    
    &:hover{
        border: ${activeStyle};
    }

    h3{
        text-align: center;
        text-transform: uppercase;
        margin: 0.1rem 0;
    }

    div{
        text-align: left;
        color: grey;
        margin: 1rem 0.5rem;

        p{
            color:black;
            margin: 0.25rem 0 0.5rem 0;
            font-size: 0.9rem;

            strong{
                font-size:1rem;
            }
        }
    }

    img{
        width: 1rem;
        margin: 0 0.75rem;
    }

`

export const BackTitle = styled.h3 `
    text-align: left;
	cursor: pointer;
    width:85vw;
    margin:2.5rem auto 0;

    img{
        width: 1rem;
        margin: 0 0.5rem -0.1rem 0;
    }
`