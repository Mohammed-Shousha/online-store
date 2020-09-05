import styled from 'styled-components'
import { device } from '../Data/Constants'

export const OrdersContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5em;

    @media ${device.laptop}{
        margin-bottom: 4em;
    }

`
export const OrdersTitle = styled.div`
    text-align: center;
    width: 95%;
    margin: 0 0 0.5em;

    @media ${device.tablet}{
        width: 80%;
    }

    @media ${device.laptopS}{
        width: 60vw;
    }

    @media ${device.laptopL}{
        width: 65vw;
    }

    /* time */
    h2{
        font-size: 1em;
        margin: 0;
        padding: 0 0 0.5em;
        border-bottom: 1px solid #2F4858;

        @media ${device.tablet}{
            font-size: 1.15em;
        }

        @media ${device.laptopS}{
            font-size: 1.25em;
        }

        @media ${device.laptop}{
            font-size: 1.4em;
        }

        @media ${device.desktop}{
            font-size: 1.5em;
        }
    }

    /* id */
    h3{
        font-size: 0.75em;
        margin: 0 0 0.25em;

        @media ${device.tablet}{
            font-size: 0.9em;
        }

        @media ${device.laptopS}{
            font-size: 1em;
        }

        @media ${device.laptop}{
            font-size: 1.15em;
        }

        @media ${device.desktop}{
            font-size: 1.25em;
        }
    }
`