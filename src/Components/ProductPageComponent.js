import styled from 'styled-components'
import { device } from '../Data/Constants'
import { AddToCart } from '../Components/ProductsComponenets'


export const CategoryTitle = styled.p`
    width: 90vw;
    font-size: 0.85em;
	margin: 4.5em auto 1em;
	text-align: ${props => props.align};
	color: rgba(0,0,0,0.7);

    @media ${device.tablet}{
	    margin: 3.25em auto 1em;
        font-size: 1.15em;
    }

    @media ${device.laptop}{
        font-size: 1.4em;
        margin: 1em auto 1em;
    }

    @media ${device.laptopL}{
        font-size: 1.5em;
    }
`

export const ProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    @media ${device.laptopS}{
        flex-direction: row;
        width: 90vw;
        margin: auto auto 1.5em;
    }

    /* product img*/
    > img{
        width: 16em;
        height: 10.8em;
        border-radius: 0.5rem; 
        

        @media ${device.tablet}{
            width: 19em;
            height: 13em;
        }

        @media ${device.laptopS}{
            width: 17em;
            height: 12.25em;
        }

        @media ${device.laptop}{
            width: 20em;
            height: 14.5em;
        }

        @media ${device.laptopL}{
            width: 23em;
            height: 16.5em;
        }

        @media ${device.desktop}{
            width: 25em;
            height: 18em;
        }
    }

     div{
        display:flex;
        width: 15em;
        flex-direction: column;
        margin:1em 2em 1.5em;
        /* justify-content: left; */
        align-items: left;
        text-align: left;

        @media ${device.tablet}{
            width: 18em;
        }

        @media ${device.laptopS}{
            width: 50vw;
        }

        /*product brand*/
        p{
            color: grey;
            font-size: 0.85em;

            @media ${device.tablet}{
                font-size: 1em;
            }

            @media ${device.laptopS}{
                font-size: 1.15em;
            }

            @media ${device.laptop}{
                font-size: 1.25em;
            }

            @media ${device.laptopL}{
                font-size: 1.35em;
            }

            @media ${device.desktop}{
                font-size: 1.45em;
            }
        }

        /*product name - price*/
        h1{
            color: rgba(0,0,0,0.85);
            font-size: 1.25em;

            @media ${device.tablet}{
                font-size: 1.3em;
            }

            @media ${device.laptopS}{
                font-size: 1.4em;
            }

            @media ${device.laptop}{
                font-size: 1.65em;
            }

            @media ${device.laptopL}{
                font-size: 1.75em;
            }

            @media ${device.laptopL}{
                font-size: 1.85em;
            }
        }

        /*product description*/
        h2{
            color: rgba(0,0,0,0.5);
            font-size: 1.15em;
            font-weight: normal;

            @media ${device.tablet}{
                font-size: 1.2em;
            }

            @media ${device.laptopS}{
                font-size: 1.3em;
            }

            @media ${device.laptop}{
                font-size: 1.4em;
            }

            @media ${device.laptopL}{
                font-size: 1.5em;
            }

            @media ${device.laptopL}{
                font-size: 1.6em;
            }
        }
    } 
`

export const AddToCartButton = styled(AddToCart) `
    width: 19em;
    height: 3em;

    @media ${device.tablet}{
        width: 22em;
    }

    @media ${device.laptopS}{
        width: 24em;
        font-size: 0.85em;
    }

    @media ${device.laptop}{
        font-size: 0.95em;
    }

    @media ${device.laptopL}{
        font-size: 1em;
    }
`