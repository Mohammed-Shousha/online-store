import styled from 'styled-components'
import { device } from '../Data/Constants'

const Icon = styled.img `
    width: 5em;
	margin-right:${props => props.alt === 'cart' ? '1.25em' : ''};

    @media ${device.tablet}{
        width:6em;
        margin-right:${props => props.alt === 'cart' ? '1.4em' : ''};
    }

    @media ${device.laptopS}{
        width:7.25em;
        margin-right:${props => props.alt === 'cart' ? '1.5em' : ''};
    }

    @media ${device.laptop}{
        width:8em;
        margin-right:${props => props.alt === 'cart' ? '1.65em' : ''};
    }

    @media ${device.laptopL}{
        width:9em;
        margin-right:${props => props.alt === 'cart' ? '1.8em' : ''};
    }

    @media ${device.desktop}{
        width:10em;
        margin-right:${props => props.alt === 'cart' ? '1.95em' : ''};
    }

    /* sibiling of Icon */
    & ~ h1{
        font-size:1.25em;

        @media ${device.tablet}{
            font-size:1.4em;
        }

        @media ${device.laptopS}{
            font-size:1.5em;
        }

        @media ${device.laptop}{
            font-size:1.65em;
        }

        @media ${device.laptopL}{
            font-size:1.8em;
        }

        @media ${device.desktop}{
            font-size:1.95em;
        }
    }

    & ~ p{
        font-size:0.75em;

        @media ${device.tablet}{
            font-size: 0.8em;
        }

        @media ${device.laptopS}{
            font-size: 0.9em;
        }

        @media ${device.laptop}{
            font-size: 0.95em;
        }

        @media ${device.laptopL}{
            font-size:1.05em;
        }

        @media ${device.desktop}{
            font-size:1.2em;
        }
    }
`

export default Icon