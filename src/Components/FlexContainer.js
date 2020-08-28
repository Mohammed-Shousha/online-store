import styled from 'styled-components'
import { device } from '../Data/Constants'

const FlexContainer = styled.div`
    &&{
        display:flex;
        justify-content:${props => 
        props.around ? 'space-around' 
        :props.flexEnd? 'flex-end'
        :props.center? 'center'
        :props.between? 'space-between'
        :props.start? 'flex-start':''};
        margin: ${props => props.margin};
        align-items:${props => props.noAlign ? 'none':'center'};
        flex-direction:${props => props.responsive? 'column': ''};
        
        @media ${device.laptopS} {
            flex-direction: ${props => props.responsive ? 'row':''};
        }
    }
`

export default FlexContainer