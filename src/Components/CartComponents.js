import styled from 'styled-components'
import { device } from '../Data/Constants'

const fc = '#d6efc7', bc = '#184d47'

export const CartItemsContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 95vw;
    margin: auto;

    @media ${device.tablet}{
        width: 80vw;
    }

    @media ${device.laptopS}{
        width: 60vw;
        margin-left: ${props => props.checkout ? '1em' : '' };
    }

    @media ${device.laptopL}{
        width: 65vw;
        margin-left: ${props => props.checkout ? '2em' : '' };
    }

    > div{
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 7em;
        background: #a2de96;
        color: #2F4858;
        border-radius: 0.5rem;
        margin: 0.5em 0;
        padding: 0;

        @media ${device.laptopS}{
            height: 7.5em;
        }

        @media ${device.laptop}{
            height: 8.25em;
        }

        @media ${device.laptopL}{
            height: 8.5em;
        }

        @media ${device.desktop}{
            height: 8.75em;
        }
    
        /* product img */
        > div > img{
            border-radius: 0.5rem 0 0 0.5rem; 
            width:7em;

            @media ${device.laptopS}{
                width: 9em;
            }

            @media ${device.laptop}{
                width: 11em;
            }

            @media ${device.desktop}{
                width: 13em;
            }
        }
    }
`

export const ProductDetails = styled.div `
    margin-left: 0.5em;
	text-align: left;
	text-transform: uppercase;

    @media ${device.laptopS}{
        margin-left: 0.75em;
    }

    @media ${device.laptopL}{
        margin-left: 1em;
    }

    /* name*/ 
    h2{ 
        font-size:1em;
        white-space:nowrap;

        @media ${device.tablet}{
            font-size:1.15em;
        }

        @media ${device.laptop}{
            font-size:1.25em;
        }

        @media ${device.desktop}{
            font-size: 1.5em;
        }
    }

    /*price*/
    h3{
        font-size:0.85em;

        @media ${device.tablet}{
            font-size:1em;
        }

        @media ${device.laptop}{
            font-size:1.15em;
        }

        @media ${device.desktop}{
            font-size:1.25em;
        }
    }

    /*description*/
    p{
        font-size:0.65em;

        @media ${device.tablet}{
            font-size:0.85em;
        }

        @media ${device.laptop}{
            font-size: 1em;
        }

        @media ${device.desktop}{
            font-size: 1.15em;
        }
    }
`

export const ProductActions = styled.div`
    &&{
        margin-right: 0.5em;

        @media ${device.laptop}{
            margin-right: 0.75em;
        }

        @media ${device.laptopL}{
            margin-right: 1em;
        }

        /*qty*/ 
        h3{
            font-size: 1em;

            @media ${device.laptop}{
                font-size: 1.25em;
            }

            @media ${device.desktop}{
                font-size: 1.35em;
            }
        }
    
        /*bin*/
        img{
            cursor: pointer;
            width:1.5em;

            @media ${device.laptop}{
                width:1.75em;
            }

            @media ${device.desktop}{
                width:2em;
            }
        }
    }
`

export const OrderSummaryContainer = styled.div `
	width: 95vw;
    margin: auto;

    @media ${device.tablet}{
        width: 80vw;
    }

    @media ${device.laptopS}{
        width: 35vw;
    }

    @media ${device.laptop}{
        width: 30vw;
    }

    @media ${device.laptopL}{
        width: 25vw;
    }

    @media ${device.desktop}{
        width: 22vw;
    }

    div{
        text-align: left;
        white-space: nowrap;
        padding: 2em 2.5em ;
        background:${bc} ;
        color: ${fc};
        margin:0.5em 0;
        border-radius: 0.5rem;

        /*order summary */
        h1{
            text-align:center;
            font-size:1.25em;

            @media ${device.tablet}{
                font-size:1.5em;
            }

            @media ${device.desktop}{
                font-size:1.75em;
            }
        }

        /*total*/
        h2{
            font-size:1.15em;

            @media ${device.tablet}{
                font-size:1.25em;
            }

            @media ${device.desktop}{
                font-size:1.5em;
            }
        }
        
        /*shipping & subtotal */
        h3{
            font-size:1em;

            @media ${device.tablet}{
                font-size:1.15em;
            }

            @media ${device.desktop}{
                font-size:1.25em;
            }
        }

        /*prices*/
        span{
            word-spacing: -5px;
            float: right;
        }
    }
`

export const CartButton = styled.button `
    display: flex;
	justify-content: center;
	align-content: center;
    white-space:nowrap;
    width:${props => props.checkout ? '90%': '50%'};
	padding:${props => props.checkout ? '1em': '0.15em'} 0;
	margin: auto;
    margin-top:${props => props.checkout ? '2em' : ''};
	border:none;
	border-radius: 5px;
	background: ${props => props.checkout ? fc :bc};
	color: ${props => props.checkout ? bc : fc};
	cursor: pointer;
	outline: none;

    @media ${device.tablet}{
        width:${props => props.checkout ? '23em' : '17em'};
    }

    @media ${device.laptopS}{
        width:${props => props.checkout ? '90%' : '50%'};
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 1.75em;
        margin-left: 5%;
    }
`