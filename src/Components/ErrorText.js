import styled from 'styled-components'
import { device } from '../Data/Constants'

const ErrorText = styled.p `
    &&{
        font-size: 10px;
        color: red;
        margin: 0;

        @media ${device.tablet}{
            font-size: 11px;
        }

        @media ${device.laptopS}{
            font-size: 12px;
        }

        @media ${device.laptopL}{
            font-size: 13px;
        }
    }
`

export default ErrorText